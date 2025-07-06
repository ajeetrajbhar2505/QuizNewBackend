const authController = require('../controllers/authController');

const setupAuthRoutes = (socket) => {
  // Error handling middleware
    socket.on('auth:logout', (data) => authController.logout(socket, data));
    socket.on('auth:otp:send', (email) => authController.sendOTP(socket, email));
    socket.on('auth:otp:verify', (data) => authController.verifyOTP(socket, data));

    socket.on('error', (error) => {
    console.error('Socket error:', error);
    socket.emit('auth:error', { 
      message: error.message || 'Authentication error occurred' 
    });
  });
};

module.exports = setupAuthRoutes;