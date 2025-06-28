const notificationController = require('../controllers/notificationController');

const setupNotificationRoutes = (socket) => {
  socket.on('notification:get', () => notificationController.getNotifications(socket));
  socket.on('notification:read', (notificationId) => notificationController.markAsRead(socket, notificationId));
  socket.on('notification:send', (data) => notificationController.sendNotification(socket, data));
};

module.exports = setupNotificationRoutes;