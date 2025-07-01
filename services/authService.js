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

const loginUser = async (email, password, sessionInfo) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');

  const isMatch = await user.comparePassword(password);
  if (!isMatch) throw new Error('Invalid credentials');

  user.markAsLoggedIn(sessionInfo);
  await user.save();

  const token = generateToken(user);
  const userResponse = user.toObject();

  return { token, user: userResponse };
};

const logoutUser = async (userId) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');

  user.markAsLoggedOut();
  await user.save();
};

const generateGoogleAuthUrl = async () => {
  try {
    return await googleClient.generateAuthUrl({
      access_type: 'offline',  // Use 'offline' to get refresh token (optional)
      scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'], // Requested scopes
    });
  } catch (error) {
    return error
  }

};

const generateFacebookAuthUrl = () => {
  return `https://www.facebook.com/v19.0/dialog/oauth?client_id=${process.env.FACEBOOK_APP_ID}&redirect_uri=${encodeURIComponent(process.env.REDIRECT_URI)}&scope=email,public_profile&response_type=code&auth_type=rerequest`;
  ``
};

const handleGoogleCallback = async (code, sessionInfo) => {
  try {
    const { tokens } = await googleClient.getToken(code);
    const ticket = await googleClient.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { email, name, picture, sub: googleId } = ticket.getPayload();

    let user = await User.findOne({ $or: [{ email }, { googleId }] });

    if (user) {
      if (!user.googleId) {
        user.googleId = googleId;
        user.avatar = picture;
        await user.save();
      }
    } else {
      user = new User({
        name,
        email,
        googleId,
        avatar: picture,
        isVerified: true
      });
      await user.save();
    }

    user.markAsLoggedIn(sessionInfo);
    await user.save();

    const token = generateToken(user);
    const userResponse = user.toObject();

    logger.info(`Google login successful for user: ${email}`);
    return { token, user: userResponse };

  } catch (error) {
    logger.error(`Google callback error: ${error.message}`);
    throw new Error('Google authentication failed');
  }
};

const handleFacebookCallback = async (code, sessionInfo) => {
  try {

    const tokenUrl = `https://graph.facebook.com/v19.0/oauth/access_token?` + querystring.stringify({
      client_id: process.env.FACEBOOK_APP_ID,
      client_secret: process.env.FACEBOOK_APP_SECRET,
      redirect_uri: process.env.REDIRECT_URI,
      code: code
    });


    const tokenRes = await fetch(tokenUrl);
    const tokenData = await tokenRes.json();

    if (!tokenData.access_token) {
      return res.status(400).json({ message: 'Failed to get access token', details: tokenData });
    }

    const accessToken = tokenData.access_token;

    // Step 2: Fetch user profile
    const profileUrl = `https://graph.facebook.com/me?` + querystring.stringify({
      fields: 'id,name,email,picture',
      access_token: accessToken
    });

    const profileRes = await fetch(profileUrl);
    const profileData = await profileRes.json();
    console.log({ tokenUrl, accessToken, profileRes });

    if (profileData.error) {
      return res.status(400).json({ message: 'Failed to get Facebook profile', details: profileData });
    }
    console.log({ tokenUrl, accessToken, profileData });

    const { id: facebookId, name, email, picture } = profileData;


    let user = await User.findOne({ $or: [{ email }, { facebookId }] });

    if (user) {
      if (!user.facebookId) {
        user.facebookId = facebookId;
        user.avatar = picture?.data?.url;
        await user.save();
      }
    } else {
      user = new User({
        name,
        email: email || `${facebookId}@facebook.com`,
        facebookId,
        avatar: picture?.data?.url,
        isVerified: true
      });
      await user.save();
    }

    user.markAsLoggedIn(sessionInfo);
    await user.save();

    const token = generateToken(user);
    const userResponse = user.toObject();

    logger.info(`Facebook login successful for user: ${name}`);
    return { token, user: userResponse };

  } catch (error) {
    logger.error(`Facebook callback error: ${error.message}`);
    throw new Error(`Facebook authentication failed: ${error.message}`);
  }
};

const sendOtp = async (email) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');

  const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

  await Otp.deleteMany({ email });
  await new Otp({ email, otp, expiresAt }).save();

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

  user.isVerified = true;
  user.markAsLoggedIn(sessionInfo);
  await user.save();

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