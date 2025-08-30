const authService = require('../services/authService');
const logger = require('../config/logger');
const { getIO } = require('../config/socket');

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

const login = async (socket, email) => {
  try {
    const result = await authService.loginWithOtp(email);
    socket.emit('auth:login:success', result);
    logger.info(`User logged in: ${email}`);
  } catch (error) {
    socket.emit('auth:login:error', { message: error.message });
    console.log(error);
    logger.error(`Login error: ${error.message}`);
  }
};

const verifyOtpAndLogin = async (socket, email, otp, verificationToken) => {
  try {
    
    const result = await authService.verifyOtpAndLogin(
      email, 
      otp, 
      verificationToken
    );
    
    socket.emit('auth:otp:verify:success', {
      token: result.token,
      user: result.user
    });
    logger.info(`OTP verified and user logged in: ${email}`);
  } catch (error) {
    socket.emit('auth:otp:verify:error', { 
      message: error.message,
      email: email
    });
    console.log(error);
    logger.error(`OTP verification failed for ${email}: ${error.message}`);
  }
};

const logout = async (socket,userId) => {
  try {
    if (userId) {
      await authService.logoutUser(userId);
      socket.emit('auth:logout:success'); 
      socket.leave(`user_${socket.id}`);
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
    // Implement retry logic for database operations
    const maxRetries = 3;
    let retryCount = 0;
    let success = false;
    let lastError;

    const sessionInfo = {
      ipAddress: socket.handshake.address,
      userAgent: socket.handshake.headers['user-agent']
    };

    while (retryCount < maxRetries && !success) {
      try {

        const { token, user } = await authService.handleGoogleCallback(code, sessionInfo);
        success = true;
        getIO().to(`user_${user._id}`).emit('auth:google:success', { token, user });
        logger.info(`Google login successful for user: ${user.name}`);
      } catch (error) {
        console.log(error);
        lastError = error;
        retryCount++;
        if (retryCount < maxRetries) {
          await new Promise(resolve => setTimeout(resolve, 200 * retryCount));
        }
      }
    }

    if (!success) {
      logger.error(`Google auth failed after ${maxRetries} attempts`, lastError);
    }
  } catch (error) {
    logger.error(`Google callback error: ${error.message}`);
    console.log(error);
    socket.emit('auth:google:error', {
      message: 'Authentication failed. Please try again.',
      retryable: false
    });
  }
}

const facebookCallback = async (socket, code) => {
  try {
    // Implement retry logic for database operations
    const maxRetries = 3;
    let retryCount = 0;
    let success = false;
    let lastError;

    const sessionInfo = {
      ipAddress: socket.handshake.address,
      userAgent: socket.handshake.headers['user-agent']
    };

    while (retryCount < maxRetries && !success) {
      try {

        const { token, user } = await authService.handleFacebookCallback(code, sessionInfo);
        getIO().to(`user_${user._id}`).emit('auth:facebook:success', { token, user });
        logger.info(`Facebook login successful for user: ${user.name}`);
        success = true;
      } catch (error) {
        lastError = error;
        retryCount++;
        if (retryCount < maxRetries) {
          await new Promise(resolve => setTimeout(resolve, 200 * retryCount));
        }
      }
    }

    if (!success) {
      logger.error(`Facebook auth failed after ${maxRetries} attempts`, lastError);
    }
  } catch (error) {
    logger.error('Facebook callback error:', error);
    console.log(error);
    socket.emit('auth:facebook:error', {
      message: 'Authentication failed. Please try again.',
      retryable: false
    });
  }
}

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
  verifyOtpAndLogin,
  googleLogin,
  facebookLogin,
  googleCallback,
  facebookCallback,
  sendOTP,
  verifyOTP
};