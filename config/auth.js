const jwt = require('jsonwebtoken');
const logger = require('./logger');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: '1d' }
  );
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    logger.error('JWT Verification Error:', err);
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};