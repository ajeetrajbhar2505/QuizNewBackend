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
    const result = await authService.loginUser(data.email, data.password);
    socket.emit('auth:login:success', result);
    logger.info(`User logged in: ${data.email}`);
  } catch (error) {
    socket.emit('auth:login:error', { message: error.message });
    logger.error(`Login error: ${error.message}`);
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
    socket.emit('auth:google:url', { url });
    logger.info('Google auth URL generated');
  } catch (error) {
    socket.emit('auth:google:error', { message: error.message });
    logger.error(`Google auth error: ${error.message}`);
  }
};

const googleCallback = async (socket, code) => {
  try {
    const { token, user } = await authService.handleGoogleCallback(code);
    
    // Emit to the specific socket
    socket.emit('auth:google:success', { token, user });
    
    // Broadcast to all sockets if needed
    const io = require('../socket').getIO();
    io.emit('receiveLogin', { token });
    
    logger.info(`Google login successful for user: ${user.email}`);
  } catch (error) {
    socket.emit('auth:google:error', { message: error.message });
    logger.error(`Google callback error: ${error.message}`);
  }
};

const facebookCallback = async (socket, code) => {
  try {
    const { token, user } = await authService.handleFacebookCallback(code);
    
    // Emit to the specific socket
    socket.emit('auth:facebook:success', { token, user });
    
    // Broadcast to all sockets if needed
    const io = require('../socket').getIO();
    io.emit('receiveLogin', { token });
    
    logger.info(`Facebook login successful for user: ${user.username}`);
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
    const result = await authService.verifyOtp(data.email, data.otp);
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
  googleLogin,
  facebookLogin,
  googleCallback,
  facebookCallback,
  sendOTP,
  verifyOTP
};