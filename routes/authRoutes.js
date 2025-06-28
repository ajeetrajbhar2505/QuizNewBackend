const authController = require('../controllers/authController');

const setupAuthRoutes = (socket) => {
  socket.on('auth:register', (data) => authController.register(socket, data));
  socket.on('auth:login', (data) => authController.login(socket, data));
  socket.on('auth:google', (token) => authController.googleLogin(socket, token));
  socket.on('auth:facebook', (token) => authController.facebookLogin(socket, token));
  socket.on('auth:logout', () => authController.logout(socket));
  socket.on('auth:me', () => authController.me(socket));
};

module.exports = setupAuthRoutes;