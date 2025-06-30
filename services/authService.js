const bcrypt = require('bcryptjs');
const otpGenerator = require('otp-generator');
const nodemailer = require('nodemailer');
const { generateToken } = require('../config/auth');
const User = require('../models/User');
const Otp = require('../models/Otp');
const Wallet = require('../models/Wallet');
const logger = require('../config/logger');

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

const client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URL
  );

const registerUser = async (userData) => {
  const { username, email, phoneNumber, password, upiId, role } = userData;

  const existingUser = await User.findOne({ $or: [{ email }, { username }] });
  if (existingUser) {
    throw new Error('User with this email or username already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newWallet = new Wallet({ balance: 0 });
  await newWallet.save();

  const newUser = new User({
    username,
    email,
    phoneNumber,
    password: hashedPassword,
    upiId,
    wallet: newWallet._id,
    role: role || 'student',
  });

  await newUser.save();

  const userResponse = newUser.toObject();
  delete userResponse.password;

  return { user: userResponse, wallet: newWallet };
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');

  const isMatch = await user.matchPassword(password);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = generateToken(user);
  const userResponse = user.toObject();
  delete userResponse.password;

  return { token, user: userResponse };
};

const generateGoogleAuthUrl = () => {
  return `https://accounts.google.com/o/oauth2/v2/auth?` +
    `client_id=${process.env.GOOGLE_CLIENT_ID}&` +
    `redirect_uri=${encodeURIComponent(process.env.GOOGLE_REDIRECT_URL)}&` +
    `response_type=code&` +
    `scope=profile email&` +
    `access_type=offline`;
};

const generateFacebookAuthUrl = () => {
    return `https://www.facebook.com/v19.0/dialog/oauth?` +
    `client_id=${process.env.FACEBOOK_APP_ID}&` +
    `redirect_uri=${encodeURIComponent(process.env.REDIRECT_URI)}&` +
    `response_type=code&` +
    `scope=public_profile,email&` +
    `auth_type=rerequest`;
  };


const handleGoogleCallback = async (code) => {
    try {
      // Step 1: Exchange authorization code for tokens
      const { tokens } = await client.getToken(code);
  
      // Step 2: Verify ID token
      const ticket = await client.verifyIdToken({
        idToken: tokens.id_token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
  
      const { email, name, picture, sub: googleId } = ticket.getPayload();
  
      // Step 3: Check for existing user
      let user = await User.findOne({ $or: [{ email }, { googleId }] })
        .select('-password')
        .lean();
  
      if (user) {
        logger.info(`Google login for existing user: ${email}`);
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        return { token, user };
      }
  
      // Step 4: Create new user if doesn't exist
      const password = 'google-auth-' + Math.random().toString(36).slice(-8);
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Create wallet
      const newWallet = new Wallet({ balance: 0 });
      await newWallet.save();
  
      // Create user
      user = new User({
        username: name,
        email,
        password: hashedPassword,
        role: 'student',
        wallet: newWallet._id,
        googleId,
        profilePicture: picture,
      });
  
      await user.save();
  
      // Prepare response
      const userResponse = user.toObject();
      delete userResponse.password;
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
  
      logger.info(`New user created via Google: ${email}`);
      return { token, user: userResponse };
  
    } catch (error) {
      logger.error(`Google callback error: ${error.message}`);
      throw new Error('Google authentication failed');
    }
  };
  


const handleFacebookCallback = async (code) => {
    try {
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
  
      // Step 2: Fetch user profile
      const profileUrl = `https://graph.facebook.com/me?` + 
        querystring.stringify({
          fields: 'id,name,email,picture',
          access_token: tokenData.access_token
        });
  
      const profileRes = await axios.get(profileUrl);
      const profileData = profileRes.data;
  
      if (profileData.error) {
        throw new Error('Failed to get Facebook profile');
      }
  
      const { id: facebookId, name, email, picture } = profileData;
  
      // Step 3: Check for existing user
      let user = await User.findOne({ $or: [{ email }, { facebookId }] })
        .select('-password')
        .lean();
  
      if (user) {
        logger.info(`Facebook login for existing user: ${email}`);
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        return { token, user };
      }
  
      // Step 4: Create new user if doesn't exist
      const password = 'fb-auth-' + Math.random().toString(36).slice(-8);
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Create wallet
      const newWallet = new Wallet({ balance: 0 });
      await newWallet.save();
  
      // Create user
      user = new User({
        username: name,
        email: email || `${facebookId}@facebook.com`, // Fallback if email not provided
        password: hashedPassword,
        role: 'student',
        wallet: newWallet._id,
        facebookId,
        profilePicture: picture?.data?.url || '',
      });
  
      await user.save();
  
      // Prepare response
      const userResponse = user.toObject();
      delete userResponse.password;
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
  
      logger.info(`New user created via Facebook: ${user.username}`);
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
      <h2 style="color: #4CAF50;">Hello ${user.username},</h2>
      <p style="font-size: 16px;">Your OTP code is: <strong style="font-size: 20px; color: #FF5722;">${otp}</strong></p>
      <p style="font-size: 16px;">This code is valid for the next <strong>5 minutes</strong>.</p>
      <p style="font-size: 16px;">If you did not request this code, please ignore this message.</p>
      <br>
      <p style="font-size: 16px; color: #999;">Best regards,</p>
      <p style="font-size: 16px; color: #999;">Quiz Game Team</p>
    </div>
  `
  });

  return { message: 'OTP sent to email' };
};

const verifyOtp = async (email, otp) => {
  const otpRecord = await Otp.findOne({ email, otp });
  if (!otpRecord) throw new Error('Invalid OTP');
  if (otpRecord.expiresAt < Date.now()) {
    await Otp.deleteMany({ email });
    throw new Error('OTP has expired');
  }

  await Otp.deleteMany({ email });
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');

  const token = generateToken(user);
  const userResponse = user.toObject();
  delete userResponse.password;

  return { token, user: userResponse };
};

module.exports = {
  registerUser,
  loginUser,
  generateGoogleAuthUrl,
  generateFacebookAuthUrl,
  handleGoogleCallback,
  handleFacebookCallback,
  sendOtp,
  verifyOtp
};