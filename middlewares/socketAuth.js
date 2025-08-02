const jwt = require('jsonwebtoken');
const logger = require('../config/logger');

module.exports = {
  authenticate: (socket, next) => {
    try {
      const token = socket.handshake.auth.token;
      if (!token) {
        logger.warn('Authentication attempt without token');
        return next(new Error('Authentication error: No token provided'));
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      socket.user = decoded;
      logger.debug(`Authenticated user ${decoded.id}`);
      next();
    } catch (err) {
      logger.warn(`Authentication failed: ${err.message}`);
      next(new Error('Authentication error: Invalid token'));
    }
  }
};