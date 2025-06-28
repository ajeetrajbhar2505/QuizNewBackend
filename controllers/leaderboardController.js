const leaderboardService = require('../services/leaderboardService');
const logger = require('../config/logger');

const getGlobalLeaderboard = async (socket) => {
  try {
    const leaderboard = await leaderboardService.getGlobalLeaderboard();
    socket.emit('leaderboard:global:success', { leaderboard });
  } catch (error) {
    socket.emit('leaderboard:global:error', { error: error.message });
    logger.error(`Get global leaderboard error: ${error.message}`);
  }
};

const getFriendLeaderboard = async (socket) => {
  try {
    const leaderboard = await leaderboardService.getFriendLeaderboard(socket.user.id);
    socket.emit('leaderboard:friends:success', { leaderboard });
  } catch (error) {
    socket.emit('leaderboard:friends:error', { error: error.message });
    logger.error(`Get friend leaderboard error: ${error.message}`);
  }
};

module.exports = {
  getGlobalLeaderboard,
  getFriendLeaderboard,
};