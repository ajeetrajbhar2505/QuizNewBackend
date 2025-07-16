const socketIO = require('socket.io');
const socketAuth = require('../middlewares/socketAuth');
const socketService = require('../services/socketService');
const logger = require('./logger');
const authController = require('../controllers/authController');

let io;

const initSocket = (server) => {
  io = socketIO(server, {
    cors: {
      origin: process.env.CLIENT_URL || '*',
      methods: ['GET', 'POST'],
    },
  });

  // Handle unauthenticated connections first
  io.on('connection', (socket) => {
    logger.info(`New client connected: ${socket.id}`);
    
    // Register unauthenticated handlers
    socket.on('auth:register', (data) => authController.register(socket, data));
    socket.on('auth:login', (data) => authController.login(socket, data));
    socket.on('auth:google:login', () => authController.googleLogin(socket));
    socket.on('auth:google:callback', (code) => authController.googleCallback(socket, code));
    socket.on('auth:facebook:login', () => authController.facebookLogin(socket));
    socket.on('auth:facebook:callback', (code) => authController.facebookCallback(socket, code));
    socket.on('auth:verify:loginOTP', (email, otp, verificationToken) => authController.verifyOtpAndLogin(socket, email, otp, verificationToken));
    socket.on('auth:otp:verify', (data) => authController.verifyOTP(socket, data));
    socket.on('auth:otp:send', (email) => authController.sendOTP(socket, email));

    // Apply authentication middleware for other events
    socket.use((event, next) => {
      // List of events that don't require authentication
      const unauthenticatedEvents = [
        'auth:register',
        'auth:login',
        'auth:google:login',
        'auth:google:callback',
        'auth:facebook:login',
        'auth:facebook:callback',
        'auth:verify:loginOTP',
        'auth:otp:send',
        'auth:otp:verify',
        'disconnect'
      ];
      
      if (unauthenticatedEvents.includes(event[0])) {
        return next();
      }
      
      // For all other events, use the authentication middleware
      socketAuth.authenticate(socket, next);
    });

    // Register the socket with the service
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