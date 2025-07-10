const logger = require('../config/logger');
const ApiLog = require('../models/ApiLog');

const logRequest = async (socket, event, duration, status = 200) => {
  try {
    // await ApiLog.create({
    //   endpoint: event,
    //   method: 'SOCKET',
    //   statusCode: status,
    //   responseTime: duration,
    //   user: socket.user?.id,
    //   ipAddress: socket.handshake.address,
    //   userAgent: socket.handshake.headers['user-agent'],
    // });
  } catch (err) {
    logger.error('Failed to log socket request:', err);
  }
};

const socketLogger = async (socket, next) => {
  const start = Date.now();
  
  const originalEmit = socket.emit.bind(socket);
  socket.emit = (event, ...args) => {
    const duration = Date.now() - start;
    const status = event.includes(':error') ? 500 : 200;
    logRequest(socket, event, duration, status);
    return originalEmit(event, ...args);
  };

  next();
};

module.exports = socketLogger;