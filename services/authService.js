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
const mongoose = require('mongoose');

// Email transporter setup
// Example configuration that might need adjustment
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587, // Try 465 for SSL or 587 for TLS
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // Use environment variables!
    pass: process.env.EMAIL_PASSWORD
  },
  // Add these for better cloud compatibility
  tls: {
    rejectUnauthorized: false // Caution: Only for development/testing
  },
  connectionTimeout: 10000, // 10 seconds
  greetingTimeout: 10000,
  socketTimeout: 10000
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
    const otp = otpGenerator.generate(5, {
      digits: true,
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false, 
      specialChars: false,
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
      from: process.env.EMAIL_NOREPLY,
      to: email,
      subject: `${otp} - QuizGame Sign-in Verification Code`,
      html: `


      <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333333; line-height: 1.6;">
      <div style="background-color: #f8f9fa; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
        <img src="https://quiznewbackend.onrender.com/quiz-game-logo.jpg" alt="Company Logo" style="max-height: 50px; margin-bottom: 20px;">
        <h1 style="color: #2c3e50; margin: 0; font-size: 24px;">Your One-Time Password</h1>
      </div>
      
      <div style="padding: 30px; background-color: #ffffff; border-radius: 0 0 8px 8px; border: 1px solid #e9ecef;">
        <p style="font-size: 16px; margin-bottom: 20px;">Hello ${user.name || 'Valued Customer'},</p>
        
        <p style="font-size: 16px; margin-bottom: 25px;">Please use the following One-Time Password to verify your identity:</p>
        
        <div style="background-color: #f1f8fe; border: 1px dashed #3498db; padding: 20px; text-align: center; margin: 20px 0; border-radius: 6px;">
          <div style="font-size: 28px; font-weight: bold; letter-spacing: 3px; color: #2c3e50;">${otp}</div>
        </div>
        
        <p style="font-size: 14px; color: #7f8c8d; margin-bottom: 25px;">
          <strong>Note:</strong> This code expires in <span style="color: #e74c3c;">5 minutes</span>. 
          Do not share this code with anyone.
        </p>
        
        <div style="border-top: 1px solid #e9ecef; padding-top: 20px; margin-top: 20px;">
        <p style="font-size: 14px; color: #7f8c8d; margin-bottom: 5px;">Need help?</p>
        <p style="font-size: 14px; margin: 0;">
          Contact our support team at 
          <a href="mailto:ajitrajbhar.career@gmail.com" style="color: #3498db; text-decoration: none;">ajitrajbhar.career@gmail.com</a>
        </p>
      </div>
    </div>
    
    <div style="text-align: center; padding: 20px 0; font-size: 12px; color: #95a5a6;">
      <p style="margin: 5px 0;">© ${new Date().getFullYear()} Quiz Game pvt. All rights reserved.</p>
      <p style="margin: 5px 0;">
        <a href="https://quiznewbackend.onrender.com/privacy" style="color: #95a5a6; text-decoration: none; margin: 0 10px;">Privacy Policy</a>
        <a href="https://quiznewbackend.onrender.com/terms" style="color: #95a5a6; text-decoration: none; margin: 0 10px;">Terms of Service</a>
      </p>
    </div>
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
      ip: req && req.ipAddress || 'ipAddress',
      userAgent: req && req.userAgent || 'userAgent',
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

const generateGoogleAuthUrl = async (socketId) => {
  return await googleClient.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'],
    prompt: 'select_account',
    state: socketId
  });
};

const generateFacebookAuthUrl = (socketId) => {
  return `https://www.facebook.com/v19.0/dialog/oauth?client_id=${process.env.FACEBOOK_APP_ID}&redirect_uri=${encodeURIComponent(process.env.FACEBOOK_REDIRECT_URI)}&scope=email,public_profile&response_type=code&auth_type=rerequest&state=${encodeURIComponent(socketId)}`;
};

const handleGoogleCallback = async (code, req) => {
  const session = await User.startSession();
  session.startTransaction();

  try {
    const { tokens } = await googleClient.getToken({ code, redirect_uri: process.env.GOOGLE_REDIRECT_URL });
    const ticket = await googleClient.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, picture, sub: googleId } = payload;
    const sessionInfo = { ip: req?.ip || 'unknown', loginTime: new Date() };

    // Use findOneAndUpdate with upsert for an atomic "Update or Add"
    const user = await User.findOneAndUpdate(
      { email }, // Filter
      { 
        $set: { 
          name, 
          googleId, 
          avatar: picture, 
          isVerified: true, 
          lastLoginAt: new Date(), 
          isLoggedIn: true 
        },
        $addToSet: { loginHistory: sessionInfo } // Append to history if unique
      },
      { 
        upsert: true, 
        new: true, // Return the updated/new document
        runValidators: true, 
        session 
      }
    );

    // Update stats atomically
    await UserStats.findOneAndUpdate(
      { user: user._id },
      { $set: { lastActive: new Date() }, $setOnInsert: { "streak.current": 1 } },
      { upsert: true, session }
    );

    await session.commitTransaction();
    return { success: true, token: generateToken(user), user };

  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};


const handleFacebookCallback = async (code, req, maxRetries = 3) => {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await executeFacebookAuth(code, req);
    } catch (error) {
      lastError = error;

      if (error.message.includes('Write conflict') || error.message.includes('yielding is disabled')) {
        // Exponential backoff for retries
        const delay = Math.pow(2, attempt) * 1000 + Math.random() * 1000;
        logger.warn(`Write conflict detected, retrying in ${delay}ms (attempt ${attempt}/${maxRetries})`);
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }

      // Re-throw immediately for non-retryable errors
      throw error;
    }
  }

  throw lastError;
};

const executeFacebookAuth = async (code, req) => {
  const session = await User.startSession();
  session.startTransaction();

  try {
    // ... your existing Facebook auth code ...
    // BUT remove the invalid options like 'yield: true'

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
      ip: req?.ip || 'unknown',
      userAgent: req?.headers?.['user-agent'] || 'unknown',
      loginTime: new Date()
    };

    // Find or create user - use transaction retryable options
    let user = await User.findOne({ $or: [{ email: userEmail }, { facebookId }] })
      .session(session)
      .maxTimeMS(30000); // Add timeout

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
        {
          new: true,
          session,
          maxTimeMS: 30000 // Add timeout
        }
      );

    } else {
      user = new User({
        name,
        email: userEmail,
        facebookId,
        avatar,
        isVerified: true,
        lastLoginAt: new Date(),
        loginHistory: [sessionInfo] // Initialize array
      });

      await user.save({
        session,
        maxTimeMS: 30000 // Add timeout
      });
    }

    // UserStats with retryable options
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
        session,
        maxTimeMS: 30000 // Add timeout
      }
    );

    if (stats && typeof stats.updateStreak === 'function') {
      stats.updateStreak();
      await stats.save({
        session,
        maxTimeMS: 30000
      });
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
    throw error;
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
    const otp = otpGenerator.generate(5, {
      digits: true,
      upperCaseAlphabets: false,
      specialChars: false,
      specialChars: false
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
      from: process.env.EMAIL_NOREPLY,
      to: email,
      subject: `${otp} - QuizGame Sign-in Verification Code`,
      html: `
   

<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333333; line-height: 1.6;">
<div style="background-color: #f8f9fa; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
  <img src="https://quiznewbackend.onrender.com/quiz-game-logo.jpg" alt="Company Logo" style="max-height: 50px; margin-bottom: 20px;">
  <h1 style="color: #2c3e50; margin: 0; font-size: 24px;">Your One-Time Password</h1>
</div>

<div style="padding: 30px; background-color: #ffffff; border-radius: 0 0 8px 8px; border: 1px solid #e9ecef;">
  <p style="font-size: 16px; margin-bottom: 20px;">Hello ${user.name || 'Valued Customer'},</p>
  
  <p style="font-size: 16px; margin-bottom: 25px;">Please use the following One-Time Password to verify your identity:</p>
  
  <div style="background-color: #f1f8fe; border: 1px dashed #3498db; padding: 20px; text-align: center; margin: 20px 0; border-radius: 6px;">
    <div style="font-size: 28px; font-weight: bold; letter-spacing: 3px; color: #2c3e50;">${otp}</div>
  </div>
  
  <p style="font-size: 14px; color: #7f8c8d; margin-bottom: 25px;">
    <strong>Note:</strong> This code expires in <span style="color: #e74c3c;">5 minutes</span>. 
    Do not share this code with anyone.
  </p>
  
  <div style="border-top: 1px solid #e9ecef; padding-top: 20px; margin-top: 20px;">
    <p style="font-size: 14px; color: #7f8c8d; margin-bottom: 5px;">Need help?</p>
    <p style="font-size: 14px; margin: 0;">
      Contact our support team at 
      <a href="mailto:ajitrajbhar.career@gmail.com" style="color: #3498db; text-decoration: none;">ajitrajbhar.career@gmail.com</a>
    </p>
  </div>
</div>

<div style="text-align: center; padding: 20px 0; font-size: 12px; color: #95a5a6;">
  <p style="margin: 5px 0;">© ${new Date().getFullYear()} Quiz Game pvt. All rights reserved.</p>
  <p style="margin: 5px 0;">
    <a href="https://quiznewbackend.onrender.com/privacy" style="color: #95a5a6; text-decoration: none; margin: 0 10px;">Privacy Policy</a>
    <a href="https://quiznewbackend.onrender.com/terms" style="color: #95a5a6; text-decoration: none; margin: 0 10px;">Terms of Service</a>
  </p>
</div>
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

    // Handle UserStats - FIXED
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
        yield: true,
        session // Removed invalid options
      }
    );

    // Safe method call
    if (stats && typeof stats.updateStreak === 'function') {
      stats.updateStreak();
      await stats.save({ session });
    }

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