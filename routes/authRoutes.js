const authController = require('../controllers/authController');

const setupAuthRoutes = (socket) => {
  socket.on('auth:register', (data) => authController.register(socket, data));
  socket.on('auth:login', (data) => authController.login(socket, data));
  socket.on('auth:logout', () => authController.logout(socket));
  socket.on('auth:me', () => authController.me(socket));
};

module.exports = setupAuthRoutes;