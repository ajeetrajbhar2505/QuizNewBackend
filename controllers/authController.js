const authService = require('../services/authService');
const logger = require('../config/logger');
const { getIO } = require('../config/socket');

const register = async (socket, data) => {
  try {
    const { email, password, name } = data;
    const { user, token } = await authService.registerUser(email, password, name);
    
    socket.emit('auth:register:success', { user, token });
    logger.info(`User registered: ${email}`);
  } catch (error) {
    socket.emit('auth:register:error', { error: error.message });
    logger.error(`Registration error: ${error.message}`);
  }
};

const login = async (socket, data) => {
  try {
    const { email, password } = data;
    const { user, token } = await authService.loginUser(email, password);
    
    socket.emit('auth:login:success', { user, token });
    logger.info(`User logged in: ${email}`);
  } catch (error) {
    socket.emit('auth:login:error', { error: error.message });
    logger.error(`Login error: ${error.message}`);
  }
};

const logout = async (socket) => {
  try {
    await authService.logoutUser(socket.user.id);
    socket.emit('auth:logout:success');
    logger.info(`User logged out: ${socket.user.email}`);
  } catch (error) {
    socket.emit('auth:logout:error', { error: error.message });
    logger.error(`Logout error: ${error.message}`);
  }
};

const me = async (socket) => {
  try {
    const user = await authService.getCurrentUser(socket.user.id);
    socket.emit('auth:me:success', { user });
  } catch (error) {
    socket.emit('auth:me:error', { error: error.message });
    logger.error(`Get current user error: ${error.message}`);
  }
};

module.exports = {
  register,
  login,
  logout,
  me,
};