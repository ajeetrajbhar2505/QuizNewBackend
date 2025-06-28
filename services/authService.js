const User = require('../models/User');
const { 
  generateToken, 
  verifyGoogleToken, 
  verifyFacebookToken 
} = require('../config/auth');
const logger = require('../config/logger');

const registerUser = async (email, password, name) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('Email already in use');
  }

  const user = await User.create({ email, password, name });
  const token = generateToken(user);

  return { user, token };
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  const token = generateToken(user);

  return { user, token };
};

const googleLogin = async (idToken) => {
  const googleUser = await verifyGoogleToken(idToken);
  
  if (!googleUser.email_verified) {
    throw new Error('Google email not verified');
  }

  let user = await User.findOne({ email: googleUser.email });
  
  if (!user) {
    user = await User.create({
      name: googleUser.name,
      email: googleUser.email,
      googleId: googleUser.sub,
      avatar: googleUser.picture,
      isVerified: true
    });
  } else if (!user.googleId) {
    user.googleId = googleUser.sub;
    await user.save();
  }

  const token = generateToken(user);
  return { user, token };
};

const facebookLogin = async (accessToken) => {
  const fbUser = await verifyFacebookToken(accessToken);
  
  if (!fbUser.email) {
    throw new Error('Facebook email not available');
  }

  let user = await User.findOne({ email: fbUser.email });
  
  if (!user) {
    user = await User.create({
      name: fbUser.name,
      email: fbUser.email,
      facebookId: fbUser.id,
      avatar: fbUser.picture?.data?.url,
      isVerified: true
    });
  } else if (!user.facebookId) {
    user.facebookId = fbUser.id;
    await user.save();
  }

  const token = generateToken(user);
  return { user, token };
};

const logoutUser = async (userId) => {
  logger.info(`User ${userId} logged out`);
  return true;
};

const getCurrentUser = async (userId) => {
  return await User.findById(userId).select('-password');
};

module.exports = {
  registerUser,
  loginUser,
  googleLogin,
  facebookLogin,
  logoutUser,
  getCurrentUser,
};