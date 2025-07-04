const authService = require('../services/authService');
const logger = require('../config/logger');

const register = async (socket, data) => {
  try {
    const result = await authService.registerUser(data);
    socket.emit('auth:register:success', result);
    logger.info(`User registered: ${data.email}`);
  } catch (error) {
    socket.emit('auth:register:error', { message: error.message });
    logger.error(`Registration error: ${error.message}`);
  }
};

const login = async (socket, data) => {
  try {
    const sessionInfo = {
      ipAddress: socket.handshake.address,
      userAgent: socket.handshake.headers['user-agent']
    };
    const result = await authService.loginUser(data.email, data.password, sessionInfo);
    socket.emit('auth:login:success', result);
    logger.info(`User logged in: ${data.email}`);
  } catch (error) {
    socket.emit('auth:login:error', { message: error.message });
    logger.error(`Login error: ${error.message}`);
  }
};

const logout = async (socket,userId) => {
  try {
    if (userId) {
      await authService.logoutUser(userId);
      socket.emit('auth:logout:success'); 
      logger.info(`User logged out: ${userId}`);
    }
  } catch (error) {
    socket.emit('auth:logout:error', { message: error.message });
    logger.error(`Logout error: ${error.message}`);
  }
};

const googleLogin = async (socket) => {
  try {
    const url = await authService.generateGoogleAuthUrl();
    socket.emit('auth:google:url', { url });
    logger.info('Google auth URL generated');
  } catch (error) {
    socket.emit('auth:google:error', { message: error.message });
    logger.error(`Google auth error: ${error.message}`);
  }
};

const facebookLogin = async (socket) => {
  try {
    const url = await authService.generateFacebookAuthUrl();
    socket.emit('auth:facebook:url', { url });
    logger.info('Facebook auth URL generated');
  } catch (error) {
    socket.emit('auth:facebook:error', { message: error.message });
    logger.error(`Facebook auth error: ${error.message}`);
  }
};

const googleCallback = async (socket, code) => {
  try {
    const sessionInfo = {
      ipAddress: socket.handshake.address,
      userAgent: socket.handshake.headers['user-agent']
    };
    const { token, user } = await authService.handleGoogleCallback(code, sessionInfo);
    
    socket.emit('auth:google:success', { token, user });
    
    logger.info(`Google login successful for user: ${user.email}`);
  } catch (error) {
    socket.emit('auth:google:error', { message: error.message });
    logger.error(`Google callback error: ${error.message}`);
  }
};

const facebookCallback = async (socket, code) => {
  try {
    console.log({socket,code});
    const sessionInfo = {
      ipAddress: socket.handshake.address,
      userAgent: socket.handshake.headers['user-agent']
    };
    const { token, user } = await authService.handleFacebookCallback(code, sessionInfo);
    
    socket.emit('auth:facebook:success', { token, user });
    logger.info(`Facebook login successful for user: ${user.name}`);
  } catch (error) {
    socket.emit('auth:facebook:error', { 
      message: error.message || 'Facebook authentication failed' 
    });
    logger.error(`Facebook callback error: ${error.message}`);
  }
};

const sendOTP = async (socket, email) => {
  try {
    const result = await authService.sendOtp(email);
    socket.emit('auth:otp:send:success', result);
    logger.info(`OTP sent to: ${email}`);
  } catch (error) {
    socket.emit('auth:otp:send:error', { message: error.message });
    logger.error(`OTP send error: ${error.message}`);
  }
};

const verifyOTP = async (socket, data) => {
  try {
    const sessionInfo = {
      ipAddress: socket.handshake.address,
      userAgent: socket.handshake.headers['user-agent']
    };
    const result = await authService.verifyOtp(data.email, data.otp, sessionInfo);
    socket.emit('auth:otp:verify:success', result);
    logger.info(`OTP verified for: ${data.email}`);
  } catch (error) {
    socket.emit('auth:otp:verify:error', { message: error.message });
    logger.error(`OTP verify error: ${error.message}`);
  }
};

module.exports = {
  register,
  login,
  logout,
  googleLogin,
  facebookLogin,
  googleCallback,
  facebookCallback,
  sendOTP,
  verifyOTP
};