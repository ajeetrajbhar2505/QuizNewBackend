const authController = require('../controllers/authController');
const logger = require('../config/logger');

module.exports = (socket) => {
  socket.on('auth:register', (data) => {
    logger.debug(`Register attempt from ${socket.id}`);
    authController.register(socket, data);
  });

  socket.on('auth:login', (data) => {
    logger.debug(`Login attempt from ${socket.id}`);
    authController.login(socket, data);
  });

  // Add other auth-related events...
};