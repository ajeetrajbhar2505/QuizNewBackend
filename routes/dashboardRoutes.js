const dashboardController = require('../controllers/dashboardController');

const setupDashboardRoutes = (socket) => {
  socket.on('dashboard:stats:get', () => dashboardController.getDashboardStats(socket));
  socket.on('dashboard:activity:get', () => dashboardController.getRecentActivity(socket));
};

module.exports = setupDashboardRoutes;