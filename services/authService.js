const bcrypt = require('bcryptjs');
const otpGenerator = require('otp-generator');
const nodemailer = require('nodemailer');
const { generateToken } = require('../config/auth');
const User = require('../models/User');
const Otp = require('../models/Otp');
const logger = require('../config/logger');
const { OAuth2Client } = require('google-auth-library');
const axios = require('axios');
const querystring = require('querystring');

// Email transporter setup
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, process.env.GOOGLE_REDIRECT_URL);


const registerUser = async (userData) => {
  const { name, email, password } = userData;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('User with this email already exists');
  }

  const newUser = new User({
    name,
    email,
    password,
    isVerified: false
  });

  await newUser.save();

  return { user: newUser.toObject() };
};

const loginUser = async (email, sessionInfo) => {
  const session = await User.startSession();
  session.startTransaction();

  try {
    const user = await User.findOne({ email }).session(session);
    if (!user) throw new Error('User not found');

    user.markAsLoggedIn(sessionInfo);
    await user.save({ session });

    const token = generateToken(user);
    const userResponse = user.toObject();

    await session.commitTransaction();
    session.endSession();

    return { token, user: userResponse };

  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

const logoutUser = async (userId) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');

  user.markAsLoggedOut();
  await user.save();
};

const generateGoogleAuthUrl = async () => {
  try {
    return  await googleClient.generateAuthUrl({
      access_type: 'offline',  // Use 'offline' to get refresh token (optional)
      scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'], // Requested scopes
  });
  } catch (error) {
    return error
  }

};

const generateFacebookAuthUrl = () => {
  return `https://www.facebook.com/v19.0/dialog/oauth?client_id=${process.env.FACEBOOK_APP_ID}&redirect_uri=${encodeURIComponent(process.env.FACEBOOK_REDIRECT_URI)}&scope=email,public_profile&response_type=code&auth_type=rerequest`;
``};

const handleGoogleCallback = async (code, sessionInfo) => {
  try {
    const { tokens } = await googleClient.getToken(code);
    const ticket = await googleClient.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { email, name, picture, sub: googleId } = ticket.getPayload();
    const defaultAvatar = 'https://quiznewbackend.onrender.com/profile.jpg';
    const avatar = picture?.startsWith('http') ? picture : defaultAvatar;

    // Start a session to handle concurrent operations
    const session = await User.startSession();
    session.startTransaction();

    try {
      let user = await User.findOne({ $or: [{ email }, { googleId }] }).session(session);

      if (user) {
        // Use findOneAndUpdate to avoid version conflicts
        if (!user.googleId) {
          user = await User.findOneAndUpdate(
            { _id: user._id },
            { 
              $set: { googleId, avatar },
              $addToSet: { loginHistory: sessionInfo },
              $setOnInsert: { lastLoginAt: new Date() }
            },
            { new: true, session }
          );
        } else {
          // Just update login history for existing users
          user = await User.findOneAndUpdate(
            { _id: user._id },
            { 
              $addToSet: { loginHistory: sessionInfo },
              $set: { lastLoginAt: new Date() }
            },
            { new: true, session }
          );
        }
      } else {
        // Create new user
        user = new User({
          name,
          email,
          googleId,
          avatar,
          isVerified: true,
          loginHistory: [sessionInfo],
          lastLoginAt: new Date()
        });
        await user.save({ session });
      }

      await session.commitTransaction();
      session.endSession();

      const token = generateToken(user);
      const userResponse = user.toObject();

      logger.info(`Google login successful for user: ${email}`);
      return { token, user: userResponse };

    } catch (error) {
      await session.abortTransaction();
      session.endSession();
      logger.error(`Transaction error during Google auth: ${error.message}`);
      throw new Error('Google authentication failed');
    }

  } catch (error) {
    logger.error(`Google callback error: ${error.message}`);
    throw new Error('Google authentication failed');
  }
};

const handleFacebookCallback = async (code, sessionInfo) => {
  const session = await User.startSession();
  session.startTransaction();

  try {
    // Step 1: Exchange code for access token
    const tokenUrl = `https://graph.facebook.com/v19.0/oauth/access_token?` + 
      querystring.stringify({
        client_id: process.env.FACEBOOK_APP_ID,
        client_secret: process.env.FACEBOOK_APP_SECRET,
        redirect_uri: process.env.FACEBOOK_REDIRECT_URI,
        code: code
      });

    const tokenRes = await axios.get(tokenUrl);
    const tokenData = tokenRes.data;

    if (!tokenData.access_token) {
      throw new Error('Failed to get Facebook access token');
    }

    // Step 2: Get user profile
    const profileUrl = `https://graph.facebook.com/me?` + 
      querystring.stringify({
        fields: 'id,name,email,picture.width(500).height(500)',
        access_token: tokenData.access_token
      });

    const profileRes = await axios.get(profileUrl);
    const profileData = profileRes.data;

    if (profileData.error) {
      throw new Error(`Facebook API error: ${profileData.error.message}`);
    }

    const { id: facebookId, name, email, picture } = profileData;
    const defaultAvatar = 'https://quiznewbackend.onrender.com/profile.jpg';
    const avatar = picture?.data?.url || defaultAvatar;
    const userEmail = email || `${facebookId}@facebook.com`;

    // Step 3: Find or create user in transaction
    let user = await User.findOne({ $or: [{ email: userEmail }, { facebookId }] })
      .session(session);

    if (user) {
      // Update existing user
      const update = {
        $set: {
          lastLoginAt: new Date(),
          ...(!user.facebookId && { facebookId }),
          ...(!user.avatar?.includes('http') && { avatar })
        },
        $addToSet: { 
          activeSessions: sessionInfo,
          loginHistory: sessionInfo 
        }
      };

      user = await User.findOneAndUpdate(
        { _id: user._id },
        update,
        { new: true, session }
      );
    } else {
      // Create new user
      user = new User({
        name,
        email: userEmail,
        facebookId,
        avatar,
        isVerified: true,
        activeSessions: [sessionInfo],
        loginHistory: [sessionInfo],
        lastLoginAt: new Date()
      });
      await user.save({ session });
    }

    // Step 4: Commit transaction
    await session.commitTransaction();
    session.endSession();

    // Step 5: Generate token
    const token = generateToken(user);
    const userResponse = user.toObject();

    logger.info(`Facebook login successful for user: ${user._id}`);
    return { token, user: userResponse };

  } catch (error) {
    // Handle errors and cleanup
    await session.abortTransaction();
    session.endSession();

    logger.error(`Facebook authentication failed: ${error.message}`, {
      error: error.stack,
      code,
      sessionInfo
    });

    throw new Error(`Facebook authentication failed: ${error.message}`);
  }
};

const sendOtp = async (email) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');

  const otp = otpGenerator.generate(6, { 
    upperCaseAlphabets: false, 
    specialChars: false 
  });
  
  // Generate a secure random token for OTP verification
  const token = crypto.randomBytes(32).toString('hex');
  
  // Delete any existing OTPs for this email
  await Otp.deleteMany({ email });
  
  // Create new OTP document
  const otpDoc = await new Otp({ 
    email, 
    otp, 
    token,
    expiresAt: new Date(Date.now() + 5 * 60 * 1000)
  }).save();

  // Send email
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    html: `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="color: #4CAF50;">Hello ${user.name || 'User'},</h2>
      <p style="font-size: 16px;">Your OTP code is: <strong style="font-size: 20px; color: #FF5722;">${otp}</strong></p>
      <p style="font-size: 16px;">This code is valid for the next <strong>5 minutes</strong>.</p>
      <p style="font-size: 16px;">If you did not request this code, please ignore this message.</p>
      <br>
      <p style="font-size: 16px; color: #999;">Best regards,</p>
      <p style="font-size: 16px; color: #999;">Your App Team</p>
    </div>
    `
  });

  return { 
    message: 'OTP sent to email',
    otpId: otpDoc._id,
    token: otpDoc.token,
    expiresAt: otpDoc.expiresAt
  };
};

const verifyOtp = async (email, otp, otpToken) => {
  // Find and validate OTP
  const otpDoc = await Otp.findOne({ 
    email, 
    token: otpToken,
    expiresAt: { $gt: new Date() }
  });
  
  if (!otpDoc) throw new Error('Invalid or expired OTP');
  if (otpDoc.otp !== otp) throw new Error('Invalid OTP code');

  // Delete the OTP after successful verification
  await Otp.deleteOne({ _id: otpDoc._id });

  // Generate session info
  const sessionInfo = {
    ip: req.ip,
    userAgent: req.headers['user-agent'],
    loginTime: new Date()
  };

  // Find user and mark as logged in
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');

  user.markAsLoggedIn(sessionInfo);
  await user.save();

  // Generate JWT token
  const token = generateToken(user);
  const userResponse = user.toObject();

  return { 
    token, 
    user: userResponse,
    message: 'OTP verified successfully'
  };
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  generateGoogleAuthUrl,
  generateFacebookAuthUrl,
  handleGoogleCallback,
  handleFacebookCallback,
  sendOtp,
  verifyOtp
};