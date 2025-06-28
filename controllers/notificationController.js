const notificationService = require('../services/notificationService');
const logger = require('../config/logger');
const { getIO } = require('../config/socket');

const getNotifications = async (socket) => {
  try {
    const notifications = await notificationService.getUserNotifications(socket.user.id);
    socket.emit('notification:get:success', { notifications });
  } catch (error) {
    socket.emit('notification:get:error', { error: error.message });
    logger.error(`Get notifications error: ${error.message}`);
  }
};

const markAsRead = async (socket, notificationId) => {
  try {
    await notificationService.markNotificationAsRead(socket.user.id, notificationId);
    socket.emit('notification:read:success', { notificationId });
    logger.info(`Notification marked as read: ${notificationId}`);
  } catch (error) {
    socket.emit('notification:read:error', { error: error.message });
    logger.error(`Mark notification as read error: ${error.message}`);
  }
};

const sendNotification = async (socket, { userId, message }) => {
  try {
    const notification = await notificationService.createNotification(userId, message);
    getIO().to(`user_${userId}`).emit('notification:new', { notification });
    socket.emit('notification:send:success', { notification });
    logger.info(`Notification sent to user ${userId}`);
  } catch (error) {
    socket.emit('notification:send:error', { error: error.message });
    logger.error(`Send notification error: ${error.message}`);
  }
};

module.exports = {
  getNotifications,
  markAsRead,
  sendNotification,
};