const dashboardService = require('../services/dashboardService');
const logger = require('../config/logger');

const getDashboardStats = async (socket) => {
  try {
    const stats = await dashboardService.getUserStats(socket.user.id);
    socket.emit('dashboard:stats:success', { stats });
  } catch (error) {
    socket.emit('dashboard:stats:error', { error: error.message });
    logger.error(`Get dashboard stats error: ${error.message}`);
  }
};

const getRecentActivity = async (socket) => {
  try {
    const activity = await dashboardService.getRecentActivity(socket.user.id);
    socket.emit('dashboard:activity:success', { activity });
  } catch (error) {
    socket.emit('dashboard:activity:error', { error: error.message });
    logger.error(`Get recent activity error: ${error.message}`);
  }
};

module.exports = {
  getDashboardStats,
  getRecentActivity,
};