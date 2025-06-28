const profileService = require('../services/profileService');
const logger = require('../config/logger');

const getProfile = async (socket) => {
  try {
    const profile = await profileService.getUserProfile(socket.user.id);
    socket.emit('profile:get:success', { profile });
  } catch (error) {
    socket.emit('profile:get:error', { error: error.message });
    logger.error(`Get profile error: ${error.message}`);
  }
};

const updateProfile = async (socket, data) => {
  try {
    const profile = await profileService.updateProfile(socket.user.id, data);
    socket.emit('profile:update:success', { profile });
    logger.info(`Profile updated for user ${socket.user.id}`);
  } catch (error) {
    socket.emit('profile:update:error', { error: error.message });
    logger.error(`Update profile error: ${error.message}`);
  }
};

const getBadges = async (socket) => {
  try {
    const badges = await profileService.getUserBadges(socket.user.id);
    socket.emit('profile:badges:success', { badges });
  } catch (error) {
    socket.emit('profile:badges:error', { error: error.message });
    logger.error(`Get badges error: ${error.message}`);
  }
};

module.exports = {
  getProfile,
  updateProfile,
  getBadges,
};