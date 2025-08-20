const notificationService = require('../services/notificationService');
const logger = require('../config/logger');
const { getIO } = require('../config/socket');

const getNotifications = async (socket) => {
  try {
    const notifications = await notificationService.getUserNotifications(
      socket.user._id,
      socket.user.language || 'en'
    );
    socket.emit('notification:get:success', { notifications });
  } catch (error) {
    socket.emit('notification:get:error', { error: error.message });
    logger.error(`Get notifications error: ${error.message}`);
  }
};

const getUnreadNotificationsCount = async (socket) => {
  try {
    const notifications = await notificationService.getUnreadNotificationsCount(
      socket.user._id,
      socket.user.language || 'en'
    );
    socket.emit('notification:UnreadNotificationsCount:success', notifications);
  } catch (error) {
    socket.emit('notification:UnreadNotificationsCount:error', { error: error.message });
    logger.error(`Get Unread NotificationsCount error: ${error.message}`);
  }
};

const markAsRead = async (socket, notificationId) => {
  try {
    await notificationService.markNotificationAsRead(socket.user._id, notificationId);
    socket.emit('notification:read:success', { notificationId });
    logger.info(`Notification marked as read: ${notificationId}`);
  } catch (error) {
    socket.emit('notification:read:error', { error: error.message });
    logger.error(`Mark notification as read error: ${error.message}`);
  }
};

const sendNotification = async (senderId, { recipientId, type, metadata, language }) => {
  try {
    const notification = await notificationService.createNotification({
      recipientId: recipientId,
      senderId: senderId,
      type,
      metadata,
      language
    });
    getIO().to(`user_${recipientId}`).emit('notification:send:success', { notification });
    logger.info(`Notification sent to user ${recipientId}`);
  } catch (error) {
    getIO().to(`user_${recipientId}`).emit('notification:send:error', { error: error.message });
    logger.error(`Send notification error: ${error.message}`);
  }
};

const sendBroadcastNotification = async (socket, { type, metadata }) => {
  try {

    const notification = await notificationService.sendBroadcastNotification({
      senderId: socket.user._id,
      type,
      metadata
    });

    getIO().emit('notification:broadcast:success', { notification });
    logger.info(`Broadcast notification sent by admin ${socket.user._id}`);
  } catch (error) {
    getIO().emit('notification:broadcast:error', { error: error.message });
    logger.error(`Broadcast notification error: ${error.message}`);
  }
};

module.exports = {
  getNotifications,
  markAsRead,
  sendNotification,
  sendBroadcastNotification,
  getUnreadNotificationsCount
};