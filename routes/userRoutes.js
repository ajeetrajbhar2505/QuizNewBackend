const userController = require('../controllers/userController');

const setupUserRoutes = (socket) => {
  socket.on('user:profile:get', (userId) => userController.getUserProfile(socket, userId));
  socket.on('user:profile:update', (data) => userController.updateProfile(socket, data));
  socket.on('user:friends:get', () => userController.getFriends(socket));
};

module.exports = setupUserRoutes;