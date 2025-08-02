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
    path: '/socket.io' // Ensure this matches your client configuration
  });

  // Public namespace for unauthenticated connections
  const publicNamespace = io.of('/public');
  publicNamespace.on('connection', (socket) => {
    logger.info(`New public client connected: ${socket.id}`);
    
    // Register public event handlers
    socket.on('auth:register', (data) => authController.register(socket, data));
    socket.on('auth:login', (data) => authController.login(socket, data));
    socket.on('auth:google:login', () => authController.googleLogin(socket));
    socket.on('auth:google:callback', (code) => authController.googleCallback(socket, code));
    socket.on('auth:facebook:login', () => authController.facebookLogin(socket));
    socket.on('auth:facebook:callback', (code) => authController.facebookCallback(socket, code));
    socket.on('auth:verify:loginOTP', (email, otp, verificationToken) => 
      authController.verifyOtpAndLogin(socket, email, otp, verificationToken));
    socket.on('auth:otp:verify', (data) => authController.verifyOTP(socket, data));
    socket.on('auth:otp:send', (email) => authController.sendOTP(socket, email));

    // Register the socket with the service
    socketService.registerSocket(socket, 'public');

    socket.on('disconnect', () => {
      logger.info(`Public client disconnected: ${socket.id}`);
      socketService.unregisterSocket(socket);
    });
  });

  // Private namespace for authenticated connections
  const privateNamespace = io.of('/private');
  privateNamespace.use(socketAuth.authenticate);
  
  privateNamespace.on('connection', (socket) => {
    logger.info(`New private client connected: ${socket.id} (User ID: ${socket.user.id})`);
    
    // Register private event handlers
    socket.on('quiz:all', () => socketService.getAllQuizzes(socket));
    socket.on('quiz:published', () => socketService.getPublishedQuizzes(socket));
    socket.on('auth:logout', (userId) => authController.logout(socket, userId));
    
    // Register the socket with the service
    socketService.registerSocket(socket, 'private');

    socket.on('disconnect', () => {
      logger.info(`Private client disconnected: ${socket.id}`);
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