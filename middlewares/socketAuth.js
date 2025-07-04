const { verifyToken } = require('../config/auth');
const logger = require('../config/logger');

const authenticate = async (socket, next) => {
  try {
    // Debug logging
    logger.debug('Socket handshake auth:', socket.handshake.auth);
    
    const token = socket.handshake.auth?.token;
    if (!token) {
      logger.error('No token provided in handshake');
      throw new Error('Authentication token missing');
    }

    // Verify token with proper error handling
    const decoded = await verifyToken(token).catch(err => {
      logger.error('Token verification failed:', err.message);
      throw new Error('Invalid token');
    });

    if (!decoded) {
      throw new Error('Invalid or expired token');
    }

    // Attach user to socket
    socket.user = {
      _id: decoded._id,
      email: decoded.email,
      // other relevant user data
    };

    logger.info(`Socket authenticated for user ${decoded._id}`);
    next();
  } catch (err) {
    logger.error('Socket authentication error:', {
      message: err.message,
      stack: err.stack
    });
    
    // Send more detailed error to client
    const error = new Error('Authentication failed');
    error.data = { reason: err.message };
    next(error);
  }
};

module.exports = {
  authenticate,
};