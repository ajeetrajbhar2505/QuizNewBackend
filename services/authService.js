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
const { v4: uuidv4 } = require('uuid');

// Email transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const googleClient = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID, 
  process.env.GOOGLE_CLIENT_SECRET, 
  process.env.GOOGLE_REDIRECT_URL
);

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

const loginUser = async (email, password, sessionInfo) => {
  const user = await User.findOne({ email }).select('+password');
  if (!user) throw new Error('User not found');

  const isMatch = await user.comparePassword(password);
  if (!isMatch) throw new Error('Invalid credentials');

  // Generate unique session ID
  const sessionId = uuidv4();
  
  await user.login({
    ...sessionInfo,
    loginType: 'email',
    sessionId
  });

  const token = generateToken(user);
  const userResponse = user.toObject();

  return { token, user: userResponse };
};

const logoutUser = async (userId) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');

  await user.logout();
};

const generateGoogleAuthUrl = async () => {
  return googleClient.generateAuthUrl({
    access_type: 'offline',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ],
    prompt: 'consent'
  });
};

const generateFacebookAuthUrl = () => {
  const params = querystring.stringify({
    client_id: process.env.FACEBOOK_APP_ID,
    redirect_uri: process.env.FACEBOOK_REDIRECT_URI,
    scope: 'email,public_profile',
    response_type: 'code',
    auth_type: 'rerequest',
    display: 'popup'
  });
  return `https://www.facebook.com/v19.0/dialog/oauth?${params}`;
};

const handleGoogleCallback = async (code, sessionInfo) => {
  try {
    const { tokens } = await googleClient.getToken(code);
    const ticket = await googleClient.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { email, name, picture, sub: googleId } = ticket.getPayload();
    const sessionId = uuidv4();
    const defaultAvatar = process.env.DEFAULT_AVATAR_URL || 'https://quiznewbackend.onrender.com/profile.jpg';
    const avatar = picture || defaultAvatar;

    let user = await User.findOne({ $or: [{ email }, { googleId }] });

    if (user) {
      if (!user.googleId) {
        user.googleId = googleId;
        user.avatar = avatar;
      }
    } else {
      user = new User({
        name,
        email,
        googleId,
        avatar,
        isVerified: true
      });
    }

    await user.login({
      ...sessionInfo,
      loginType: 'google',
      sessionId
    });

    const token = generateToken(user);
    const userResponse = user.toObject();

    logger.info(`Google login successful for user: ${email}`);
    return { token, user: userResponse };

  } catch (error) {
    logger.error(`Google callback error: ${error.message}`, { stack: error.stack });
    throw new Error('Google authentication failed');
  }
};

const handleFacebookCallback = async (code, sessionInfo) => {
  try {
    // Exchange code for access token
    const tokenUrl = `https://graph.facebook.com/v19.0/oauth/access_token?` + 
      querystring.stringify({
        client_id: process.env.FACEBOOK_APP_ID,
        client_secret: process.env.FACEBOOK_APP_SECRET,
        redirect_uri: process.env.FACEBOOK_REDIRECT_URI,
        code
      });

    const tokenRes = await axios.get(tokenUrl);
    const { access_token } = tokenRes.data;

    if (!access_token) {
      throw new Error('Failed to get Facebook access token');
    }

    // Get user profile
    const profileUrl = `https://graph.facebook.com/me?` + 
      querystring.stringify({
        fields: 'id,name,email,picture.width(400)',
        access_token
      });

    const profileRes = await axios.get(profileUrl);
    const { id: facebookId, name, email, picture } = profileRes.data;

    const sessionId = uuidv4();
    const defaultAvatar = process.env.DEFAULT_AVATAR_URL || 'https://quiznewbackend.onrender.com/profile.jpg';
    const avatar = picture?.data?.url || defaultAvatar;

    let user = await User.findOne({ $or: [{ email }, { facebookId }] });

    if (user) {
      if (!user.facebookId) {
        user.facebookId = facebookId;
        user.avatar = avatar;
      }
    } else {
      user = new User({
        name,
        email: email || `${facebookId}@facebook.com`,
        facebookId,
        avatar,
        isVerified: true
      });
    }

    await user.login({
      ...sessionInfo,
      loginType: 'facebook',
      sessionId
    });

    const token = generateToken(user);
    const userResponse = user.toObject();

    logger.info(`Facebook login successful for user: ${name}`);
    return { token, user: userResponse };

  } catch (error) {
    logger.error(`Facebook callback error: ${error.message}`, { stack: error.stack });
    throw new Error(`Facebook authentication failed: ${error.message}`);
  }
};

const sendOtp = async (email) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');

  const otp = otpGenerator.generate(6, { 
    upperCaseAlphabets: false, 
    specialChars: false,
    digits: true,
    alphabets: false
  });

  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

  await Otp.deleteMany({ email });
  await new Otp({ email, otp, expiresAt }).save();

  const mailOptions = {
    from: `"${process.env.EMAIL_SENDER_NAME}" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Your OTP Code',
    html: `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px;">
        <h2 style="color: #4CAF50; text-align: center;">Your Verification Code</h2>
        <div style="background-color: #ffffff; padding: 20px; border-radius: 5px; margin: 20px 0; text-align: center;">
          <p style="font-size: 16px; margin-bottom: 10px;">Use this code to verify your identity:</p>
          <div style="font-size: 24px; font-weight: bold; color: #FF5722; letter-spacing: 2px; margin: 20px 0;">${otp}</div>
          <p style="font-size: 14px; color: #666;">This code will expire in 5 minutes.</p>
        </div>
        <p style="font-size: 14px; color: #666; text-align: center;">
          If you didn't request this code, please ignore this email or contact support.
        </p>
      </div>
    </div>
    `
  };

  await transporter.sendMail(mailOptions);
  return { message: 'OTP sent to email' };
};

const verifyOtp = async (email, otp, sessionInfo) => {
  const otpRecord = await Otp.findOne({ email, otp });
  if (!otpRecord) throw new Error('Invalid OTP');
  if (otpRecord.expiresAt < Date.now()) {
    await Otp.deleteMany({ email });
    throw new Error('OTP has expired');
  }

  await Otp.deleteMany({ email });
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');

  const sessionId = uuidv4();
  
  user.isVerified = true;
  await user.login({
    ...sessionInfo,
    loginType: 'email',
    sessionId
  });

  const token = generateToken(user);
  const userResponse = user.toObject();

  return { token, user: userResponse };
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