const Notification = require('../models/Notification');
const User = require('../models/User');
const logger = require('../config/logger');
const { getIO } = require('../config/socket');

// Notification templates for each type
const NOTIFICATION_TEMPLATES = {
  'quiz-invitation': {
    en: { title: 'Quiz Invitation', message: 'You have been invited to join a quiz: {quizName}' },
    hi: { title: 'क्विज आमंत्रण', message: 'आपको एक क्विज में शामिल होने के लिए आमंत्रित किया गया है: {quizName}' }
  },
  'admin-announcement': {
    en: { title: 'Announcement', message: 'Admin announcement: {message}' },
    hi: { title: 'घोषणा', message: 'व्यवस्थापक घोषणा: {message}' }
  }
  // Add templates for other notification types
};

const createNotification = async ({ 
  recipientId, 
  senderId, 
  type, 
  language = 'en',
  metadata = {}, 
  actionUrl, 
  priority = 'medium',
  isBroadcast = false
}) => {
  // Get template for this notification type
  const template = NOTIFICATION_TEMPLATES[type] || NOTIFICATION_TEMPLATES['system-alert'];
  
  // Replace placeholders with actual data
  const title = template[language].title.replace(/{(\w+)}/g, (_, key) => metadata[key] || '');
  const message = template[language].message.replace(/{(\w+)}/g, (_, key) => metadata[key] || '');

  const notification = await Notification.create({
    recipient: isBroadcast ? null : recipientId,
    sender: senderId,
    isBroadcast,
    type,
    title: {
      en: template.en.title.replace(/{(\w+)}/g, (_, key) => metadata[key] || ''),
      hi: template.hi.title.replace(/{(\w+)}/g, (_, key) => metadata[key] || '')
    },
    message: {
      en: template.en.message.replace(/{(\w+)}/g, (_, key) => metadata[key] || ''),
      hi: template.hi.message.replace(/{(\w+)}/g, (_, key) => metadata[key] || '')
    },
    metadata,
    actionUrl,
    priority,
    language
  });

  // Emit to specific user or all users for broadcast
  if (isBroadcast) {
    getIO().emit('notification:new', { notification });
  } else {
    getIO().to(`user_${recipientId}`).emit('notification:new', { notification });
  }

  return notification;
};

const sendBroadcastNotification = async ({ senderId, type, messageData }) => {
  const notification = await createNotification({
    senderId,
    type,
    isBroadcast: true,
    metadata: messageData,
    priority: 'high'
  });

  // Store the broadcast notification in all users' records
  const users = await User.find({});
  await Promise.all(users.map(user => {
    return Notification.create({
      recipient: user._id,
      sender: senderId,
      isBroadcast: true,
      type,
      title: notification.title,
      message: notification.message,
      metadata: notification.metadata,
      actionUrl: notification.actionUrl,
      priority: notification.priority,
      language: notification.language,
      broadcastId: notification._id  // Reference to original broadcast
    });
  }));

  return notification;
};

const getUserNotifications = async (userId, language = 'en') => {
  const notifications = await Notification.find({
    $or: [
      { recipient: userId },
      { isBroadcast: true }
    ]
  })
  .sort({ createdAt: -1 })
  .limit(20);

  return notifications.map(notif => ({
    ...notif.toObject(),
    title: notif.title[language] || notif.title.en,
    message: notif.message[language] || notif.message.en
  }));
};

const markNotificationAsRead = async (userId, notificationId) => {
  const notification = await Notification.findOneAndUpdate(
    { _id: notificationId, recipient: userId },
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
  sendBroadcastNotification,
  getUserNotifications,
  markNotificationAsRead
};