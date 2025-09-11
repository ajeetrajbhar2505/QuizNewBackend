const socketIO = require('socket.io');
const socketAuth = require('../middlewares/socketAuth');
const socketService = require('../services/socketService');
const logger = require('./logger');
const createAuthHandlers = require('../controllers/authController');

let io;

const initSocket = (server) => {
  io = socketIO(server, {
    cors: {
      origin: process.env.CLIENT_URL || '*',
      methods: ['GET', 'POST'],
    },
  });

  // Create auth handlers with getIO function
  const authHandlers = createAuthHandlers(() => io);

  // Handle unauthenticated connections first
  io.on('connection', (socket) => {
    logger.info(`New client connected: ${socket.id}`);
    socket.join(`user_${socket.id}`);

    // Register unauthenticated handlers
    socket.on('auth:logout', (data) => authHandlers.logout(socket, data));
    socket.on('auth:register', (data) => authHandlers.register(socket, data));
    socket.on('auth:login', (email) => authHandlers.login(socket, email));
    socket.on('auth:google:login', () => authHandlers.googleLogin(socket));
    socket.on('auth:google:callback', (code, state) => authHandlers.googleCallback(socket, code, state));
    socket.on('auth:facebook:login', () => authHandlers.facebookLogin(socket));
    socket.on('auth:facebook:callback', (code, state) => authHandlers.facebookCallback(socket, code, state));
    socket.on('auth:verify:loginOTP', (data) => authHandlers.verifyOtpAndLogin(socket, data.email, data.otp, data.verificationToken));
    socket.on('auth:otp:verify', (data) => authHandlers.verifyOTP(socket, data));
    socket.on('auth:otp:send', (email) => authHandlers.sendOTP(socket, email));

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