const Notification = require('../models/Notification');
const logger = require('../config/logger');
const { getIO } = require('../config/socket');

const createNotification = async (userId, message, type = 'info', link = null) => {
  const notification = await Notification.create({
    user: userId,
    message,
    type,
    link,
  });

  // Emit notification to the specific user
  getIO().to(`user_${userId}`).emit('notification:new', { notification });

  return notification;
};

const getUserNotifications = async (userId) => {
  return await Notification.find({ user: userId })
    .sort({ createdAt: -1 })
    .limit(20);
};

const markNotificationAsRead = async (userId, notificationId) => {
  const notification = await Notification.findOneAndUpdate(
    { _id: notificationId, user: userId },
    { isRead: true },
    { new: true }
  );

  if (!notification) {
    throw new Error('Notification not found');
  }

  return notification;
};

module.exports = {
  createNotification,
  getUserNotifications,
  markNotificationAsRead,
};