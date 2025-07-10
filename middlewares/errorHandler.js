const logger = require('../config/logger');
const ErrorLog = require('../models/ErrorLog');

const socketErrorHandler = async (err, socket) => {
  logger.error('Socket error:', err);

  try {
    // await ErrorLog.create({
    //   message: err.message,
    //   stack: err.stack,
    //   user: socket.user?.id,
    //   ipAddress: socket.handshake.address,
    //   userAgent: socket.handshake.headers['user-agent'],
    // });
  } catch (logErr) {
    logger.error('Failed to log error:', logErr);
  }

  socket.emit('error', {
    message: err.message || 'Something went wrong',
    code: err.code || 'INTERNAL_ERROR',
  });
};

module.exports = socketErrorHandler;