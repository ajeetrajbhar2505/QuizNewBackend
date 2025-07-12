const User = require('../models/User');
const logger = require('../config/logger');

const activeSockets = new Map(); // userId -> socketId mapping

const registerSocket = (socket) => {
  if (socket.user?.id) {
    activeSockets.set(socket.user._id, socket.id);
    socket.join(`user_${socket.user._id}`);
    logger.info(`Socket registered for user ${socket.user._id}`);
  }
};

const unregisterSocket = (socket) => {
  if (socket.user?.id) {
    activeSockets.delete(socket.user._id);
    socket.leave(`user_${socket.user._id}`);
    logger.info(`Socket unregistered for user ${socket.user._id}`);
  }
};

const getSocketId = (userId) => {
  return activeSockets.get(userId);
};

const emitToUser = (userId, event, data) => {
  const io = require('../config/socket').getIO();
  io.to(`user_${userId}`).emit(event, data);
};

module.exports = {
  registerSocket,
  unregisterSocket,
  getSocketId,
  emitToUser,
};