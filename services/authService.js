const bcrypt = require('bcryptjs');
const otpGenerator = require('otp-generator');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { OAuth2Client } = require('google-auth-library');
const axios = require('axios');
const querystring = require('querystring');
const User = require('../models/User');
const UserStats = require('../models/UserStats');
const Otp = require('../models/Otp');
const logger = require('../config/logger');

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const googleClient = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URL
);

// Generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

// Generate temporary OTP verification token
const generateOtpToken = (email) => {
  return jwt.sign(
    { email, purpose: 'otp_verification' },
    process.env.JWT_SECRET,
    { expiresIn: '5m' }
  );
};

const registerUser = async (userData) => {
  const { name, email, password } = userData;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('User with this email already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    isVerified: false
  });

  await newUser.save();

  return { user: newUser.toObject() };
};

const loginWithOtp = async (email) => {
  const session = await User.startSession();
  session.startTransaction();

  try {
    // Check if user exists
    const user = await User.findOne({ email }).session(session);
    if (!user) throw new Error('User not found');

    // Generate OTP
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      digits: true
    });

    const token = crypto.randomBytes(32).toString('hex');

    await Otp.deleteMany({ email }).session(session);
    const otpDoc = await new Otp({
      email,
      otp,
      token,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000) // 5 minutes expiry
    }).save({ session });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Quiz App OTP Code',
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

    // Generate temporary token for OTP verification
    const tempToken = generateOtpToken(email);

    await session.commitTransaction();
    session.endSession();

    return {
      success: true,
      message: 'OTP sent to registered email',
      otpId: otpDoc._id,
      verificationToken: tempToken,
      expiresAt: otpDoc.expiresAt,
      user: {
        email: user.email,
        name: user.name
      }
    };

  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    logger.error(`OTP login error: ${error.message}`);
    throw error;
  }
};

const verifyOtpAndLogin = async (email, otp, verificationToken, req) => {
  const session = await User.startSession();
  session.startTransaction();

  try {
    // Verify the temporary token
    jwt.verify(verificationToken, process.env.JWT_SECRET, (err, decoded) => {
      if (err) throw new Error('Invalid or expired verification token');
      if (decoded.email !== email || decoded.purpose !== 'otp_verification') {
        throw new Error('Invalid token payload');
      }
    });

    // Validate OTP
    const otpDoc = await Otp.findOne({
      email,
      expiresAt: { $gt: new Date() }
    }).session(session);

    if (!otpDoc) throw new Error('Invalid or expired OTP');
    if (otpDoc.otp !== otp) throw new Error('Invalid OTP code');

    // Delete the OTP
    await Otp.deleteOne({ _id: otpDoc._id }).session(session);

    // Get user and update session
    const user = await User.findOne({ email }).session(session);
    if (!user) throw new Error('User not found');

    const sessionInfo = {
      ip: req.ipAddress,
      userAgent: req.userAgent,
      loginTime: new Date()
    };

    user.markAsLoggedIn(sessionInfo);
    await user.save({ session });


    const stats = await UserStats.findOneAndUpdate(
      { user: user._id },
      {
        $set: { lastActive: new Date() },
        $setOnInsert: {
          streak: {
            current: 1,
            lastUpdated: new Date()
          }
        }
      },
      {
        new: true,
        upsert: true,
        session
      }
    );

    stats.updateStreak();
    await stats.save({ session });

    // Generate final auth token
    const authToken = generateToken(user);
    const userResponse = user.toObject();

    await session.commitTransaction();
    session.endSession();

    return {
      success: true,
      message: 'Login successful',
      token: authToken,
      user: userResponse
    };

  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    logger.error(`OTP verification error: ${error.message}`);
    throw error;
  }
};

const loginUser = async (email, password, req) => {
  const session = await User.startSession();
  session.startTransaction();

  try {
    const user = await User.findOne({ email }).session(session);
    if (!user) throw new Error('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const sessionInfo = {
      ip: req.ip,
      userAgent: req.headers['user-agent'] || '',
      loginTime: new Date()
    };

    user.markAsLoggedIn(sessionInfo);
    await user.save({ session });



    const stats = await UserStats.findOneAndUpdate(
      { user: user._id },
      {
        $set: { lastActive: new Date() },
        $setOnInsert: {
          streak: {
            current: 1,
            lastUpdated: new Date()
          }
        }
      },
      {
        new: true,
        upsert: true,
        session
      }
    );

    stats.updateStreak();
    await stats.save({ session });

    const token = generateToken(user);
    const userResponse = user.toObject();

    await session.commitTransaction();
    session.endSession();

    return {
      success: true,
      token,
      user: userResponse
    };

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
  return await googleClient.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'],
    prompt: 'select_account'
  });
};

const generateFacebookAuthUrl = () => {
  return `https://www.facebook.com/v19.0/dialog/oauth?client_id=${process.env.FACEBOOK_APP_ID}&redirect_uri=${encodeURIComponent(process.env.FACEBOOK_REDIRECT_URI)}&scope=email,public_profile&response_type=code&auth_type=rerequest`;
};

const handleGoogleCallback = async (code, req) => {
  const session = await User.startSession();
  session.startTransaction();

  try {
    const { tokens } = await googleClient.getToken({ code, redirect_uri: process.env.GOOGLE_REDIRECT_URI });
    const ticket = await googleClient.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload) throw new Error('Invalid Google token payload');

    const { email, name, picture, sub: googleId } = payload;
    const defaultAvatar = 'https://quiznewbackend.onrender.com/profile.jpg';
    const avatar = picture?.startsWith('http') ? picture : defaultAvatar;

    const sessionInfo = {
      ip: req.ip,
      userAgent: 'user-agent',
      loginTime: new Date()
    };

    let user = await User.findOne({ $or: [{ email }, { googleId }] }).session(session);

    if (user) {
      if (!user.googleId) {
        user = await User.findOneAndUpdate(
          { _id: user._id },
          {
            $set: { googleId, avatar },
            $addToSet: { loginHistory: sessionInfo },
            lastLoginAt: new Date()
          },
          { new: true, yield: true, session }
        );
      } else {
        user = await User.findOneAndUpdate(
          { _id: user._id },
          {
            $addToSet: { loginHistory: sessionInfo },
            lastLoginAt: new Date(),
            isLoggedIn: true
          },
          { new: true, yield: true, session }
        );
      }

      const stats = await UserStats.findOneAndUpdate(
        { user: user._id },
        {
          $set: { lastActive: new Date() },
          $setOnInsert: {
            streak: {
              current: 1,
              lastUpdated: new Date()
            }
          }
        },
        {
          new: true,
          upsert: true,
          session
        }
      );

      stats.updateStreak();
      await stats.save({ session });

    } else {
      user = new User({
        name,
        email,
        googleId,
        avatar,
        isVerified: true,
        lastLoginAt: new Date()
      });
      user.markAsLoggedIn(sessionInfo);
      await user.save({ session });

      const stats = new UserStats({
        user: user._id,
        lastActive: new Date(),
        streak: {
          current: 1,
          lastUpdated: new Date()
        }
      });
      await stats.save({ session });
    }



    const token = generateToken(user);
    const userResponse = user.toObject();

    await session.commitTransaction();
    session.endSession();

    logger.info(`Google login successful for user: ${email}`);
    return {
      success: true,
      token,
      user: userResponse
    };

  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    logger.error(`Google callback error: ${error.message}`);
    throw new Error('Google authentication failed');
  }
};

const handleFacebookCallback = async (code, req) => {
  const session = await User.startSession();
  session.startTransaction();

  try {
    // Exchange code for access token
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

    // Get user profile
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

    const sessionInfo = {
      ip: req.ip,
      userAgent: 'user-agent',
      loginTime: new Date()
    };

    // Find or create user
    let user = await User.findOne({ $or: [{ email: userEmail }, { facebookId }] })
      .session(session);

    if (user) {
      const update = {
        $set: {
          lastLoginAt: new Date(),
          isLoggedIn: true,
          ...(!user.facebookId && { facebookId }),
          ...(!user.avatar?.includes('http') && { avatar })
        },
        $addToSet: {
          loginHistory: sessionInfo
        }
      };

      user = await User.findOneAndUpdate(
        { _id: user._id },
        update,
        { new: true, yield: true, session }
      );

      const stats = await UserStats.findOneAndUpdate(
        { user: user._id },
        {
          $set: { lastActive: new Date() },
          $setOnInsert: {
            streak: {
              current: 1,
              lastUpdated: new Date()
            }
          }
        },
        {
          new: true,
          upsert: true,
          session
        }
      );

      stats.updateStreak();
      await stats.save({ session });

    } else {
      user = new User({
        name,
        email: userEmail,
        facebookId,
        avatar,
        isVerified: true,
        lastLoginAt: new Date()
      });
      user.markAsLoggedIn(sessionInfo);
      await user.save({ session });

      const stats = new UserStats({
        user: user._id,
        lastActive: new Date(),
        streak: {
          current: 1,
          lastUpdated: new Date()
        }
      });
      await stats.save({ session });
    }


    const token = generateToken(user);
    const userResponse = user.toObject();

    await session.commitTransaction();
    session.endSession();

    logger.info(`Facebook login successful for user: ${user._id}`);
    return {
      success: true,
      token,
      user: userResponse
    };

  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    logger.error(`Facebook authentication failed: ${error.message}`);
    throw new Error(`Facebook authentication failed: ${error.message}`);
  }
};

const sendOtp = async (email) => {
  const session = await User.startSession();
  session.startTransaction();

  try {
    // Check if user exists
    const user = await User.findOne({ email }).session(session);
    if (!user) {
      throw new Error('User not found');
    }

    // Generate OTP
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      digits: true
    });

    // Generate verification token
    const token = crypto.randomBytes(32).toString('hex');

    // Delete any existing OTPs for this email
    await Otp.deleteMany({ email }).session(session);

    // Create new OTP document
    const otpDoc = await new Otp({
      email,
      otp,
      token,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000) // 5 minutes expiry
    }).save({ session });


    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Quiz App OTP Code',
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

    // Generate temporary JWT for verification
    const verificationToken = generateOtpToken(email);

    await session.commitTransaction();
    session.endSession();

    return {
      success: true,
      message: 'OTP sent successfully',
      otpId: otpDoc._id,
      verificationToken,
      expiresAt: otpDoc.expiresAt
    };

  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    logger.error(`OTP sending failed: ${error.message}`);
    throw error;
  }
};

const verifyOtp = async (email, otp, verificationToken, req) => {
  const session = await User.startSession();
  session.startTransaction();

  try {
    // Verify the JWT token first
    jwt.verify(verificationToken, process.env.JWT_SECRET, (err, decoded) => {
      if (err) throw new Error('Invalid or expired verification token');
      if (decoded.email !== email || decoded.purpose !== 'otp_verification') {
        throw new Error('Invalid token payload');
      }
    });

    // Find the OTP record
    const otpDoc = await Otp.findOne({
      email,
      expiresAt: { $gt: new Date() }
    }).session(session);

    if (!otpDoc) {
      throw new Error('Invalid or expired OTP');
    }

    if (otpDoc.otp !== otp) {
      throw new Error('Invalid OTP code');
    }

    // Delete the OTP after successful verification
    await Otp.deleteOne({ _id: otpDoc._id }).session(session);

    // Get the user
    const user = await User.findOne({ email }).session(session);
    if (!user) {
      throw new Error('User not found');
    }

    // Create session info
    const sessionInfo = {
      ip: req.ip,
      userAgent: req.headers['user-agent'],
      loginTime: new Date()
    };

    // Mark user as logged in
    user.markAsLoggedIn(sessionInfo);
    await user.save({ session });

    // Generate final auth token
    const authToken = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    const userResponse = user.toObject();

    await session.commitTransaction();
    session.endSession();

    return {
      success: true,
      message: 'OTP verified successfully',
      token: authToken,
      user: userResponse
    };

  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    logger.error(`OTP verification failed: ${error.message}`);
    throw error;
  }
};


module.exports = {
  registerUser,
  loginUser,
  loginWithOtp,
  sendOtp, verifyOtp,
  verifyOtpAndLogin,
  logoutUser,
  generateGoogleAuthUrl,
  generateFacebookAuthUrl,
  handleGoogleCallback,
  handleFacebookCallback
};