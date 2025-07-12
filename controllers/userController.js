const userService = require('../services/userService');
const logger = require('../config/logger');

const getUserProfile = async (socket, userId) => {
  try {
    const user = await userService.getUserProfile(userId);
    socket.emit('user:profile:success', { user });
  } catch (error) {
    socket.emit('user:profile:error', { error: error.message });
    logger.error(`Get user profile error: ${error.message}`);
  }
};

const updateProfile = async (socket, data) => {
  try {
    const user = await userService.updateProfile(socket.user._id, data);
    socket.emit('user:update:success', { user });
    logger.info(`User profile updated: ${socket.user._id}`);
  } catch (error) {
    socket.emit('user:update:error', { error: error.message });
    logger.error(`Update profile error: ${error.message}`);
  }
};

const getFriends = async (socket) => {
  try {
    const friends = await userService.getFriends(socket.user._id);
    socket.emit('user:friends:success', { friends });
  } catch (error) {
    socket.emit('user:friends:error', { error: error.message });
    logger.error(`Get friends error: ${error.message}`);
  }
};

module.exports = {
  getUserProfile,
  updateProfile,
  getFriends,
};