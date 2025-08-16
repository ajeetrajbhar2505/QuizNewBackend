const notificationController = require('../controllers/notificationController');

const setupNotificationRoutes = (socket) => {
  socket.on('notification:get', () => notificationController.getNotifications(socket));
  socket.on('notification:UnreadNotificationsCount', () => notificationController.getUnreadNotificationsCount(socket));
  socket.on('notification:read', (notificationId) => notificationController.markAsRead(socket, notificationId));
  socket.on('notification:send', (data) => notificationController.sendNotification(socket, data));
  socket.on('notification:broadcast', ({ type, messageData }) => notificationController.sendBroadcastNotification(socket, { type, messageData }));
};

module.exports = setupNotificationRoutes;