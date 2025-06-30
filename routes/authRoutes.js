const authController = require('../controllers/authController');

const setupAuthRoutes = (socket) => {
  // Registration
  socket.on('auth:register', (data) => authController.register(socket, data));

  // Login/Logout
  socket.on('auth:login', (data) => authController.login(socket, data));
  socket.on('auth:logout', () => authController.logout(socket));

  // Social Auth
  socket.on('auth:google:login', () => authController.googleLogin(socket));
  socket.on('auth:google:callback', (code) => authController.googleCallback(socket, code));
  socket.on('auth:facebook:login', () => authController.facebookLogin(socket));
  socket.on('auth:facebook:callback', (code) => authController.facebookCallback(socket, code));

  // OTP Verification
  socket.on('auth:otp:send', (email) => authController.sendOTP(socket, email));
  socket.on('auth:otp:verify', (data) => authController.verifyOTP(socket, data));

  // Error handling middleware
  socket.on('error', (error) => {
    console.error('Socket error:', error);
    socket.emit('auth:error', { 
      message: error.message || 'Authentication error occurred' 
    });
  });
};

module.exports = setupAuthRoutes;