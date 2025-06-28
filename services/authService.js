const User = require('../models/User');
const { generateToken } = require('../config/auth');
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

const logoutUser = async (userId) => {
  // In a socket-based app, logout might just involve client-side token removal
  // But we can track active sessions if needed
  logger.info(`User ${userId} logged out`);
  return true;
};

const getCurrentUser = async (userId) => {
  return await User.findById(userId).select('-password');
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
};