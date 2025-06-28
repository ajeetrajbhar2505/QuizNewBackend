const socketIO = require('socket.io');
const socketAuth = require('../middlewares/socketAuth');
const socketService = require('../services/socketService');
const logger = require('./logger');

let io;

const initSocket = (server) => {
  io = socketIO(server, {
    cors: {
      origin: process.env.CLIENT_URL || '*',
      methods: ['GET', 'POST'],
    },
  });

  io.use(socketAuth.authenticate);

  io.on('connection', (socket) => {
    logger.info(`New client connected: ${socket.id}`);
    socketService.registerSocket(socket);

    socket.on('disconnect', () => {
      logger.info(`Client disconnected: ${socket.id}`);
      socketService.unregisterSocket(socket);
    });
  });

  return io;
};

const getIO = () => {
  if (!io) {
    throw new Error('Socket.io not initialized');
  }
  return io;
};

module.exports = {
  initSocket,
  getIO,
};