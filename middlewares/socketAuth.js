const { verifyToken } = require('../config/auth');
const logger = require('../config/logger');

const authenticate = async (socket, next) => {
  try {
    const token = socket.handshake.auth.token;
    if (!token) {
      throw new Error('Authentication token missing');
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      throw new Error('Invalid or expired token');
    }

    socket.user = decoded;
    next();
  } catch (err) {
    logger.error('Socket authentication error:', err.message);
    next(new Error('Authentication failed'));
  }
};

module.exports = {
  authenticate,
};