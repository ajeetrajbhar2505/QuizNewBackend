const Notification = require('../models/Notification');
const User = require('../models/User');


// Notification templates for each type
// Notification templates for each type
const NOTIFICATION_TEMPLATES   = {
  'quiz-invitation': {
    en: { title: 'Quiz Invitation', message: 'You have been invited to join {custom_data} by {inviterName}' },
    hi: { title: 'क्विज आमंत्रण', message: 'आपको {inviterName} द्वारा {custom_data} क्विज में शामिल होने के लिए आमंत्रित किया गया है' }
  },
  'quiz-start': {
    en: { title: 'Quiz Starting', message: '{custom_data} is starting now! Get ready!' },
    hi: { title: 'क्विज शुरू हो रही है', message: '{custom_data} अब शुरू हो रही है! तैयार हो जाइए!' }
  },
  'question-ready': {
    en: { title: 'New Question', message: 'Next question is available in {custom_data}' },
    hi: { title: 'नया प्रश्न', message: '{custom_data} में अगला प्रश्न उपलब्ध है' }
  },
  'new-quiz': {
    en: { title: 'New Quiz', message: 'Next Quiz is available in {custom_data}' },
    hi: { title: 'नया क्विज', message: '{custom_data} में अगला क्विज उपलब्ध है' }
  },
  'quiz-ended': {
    en: { title: 'Quiz Ended ', message: '{custom_data} has ended. Thanks for playing!' },
    hi: { title: 'क्विज समाप्त', message: '{custom_data} समाप्त हो गई है। खेलने के लिए धन्यवाद!' }
  },
  'results-available': {
    en: { title: 'Results Ready', message: 'Results for {custom_data} are now available!' },
    hi: { title: 'परिणाम उपलब्ध', message: '{custom_data} के परिणाम अब उपलब्ध हैं!' }
  },
  'new-leader': {
    en: { title: 'New Leader!', message: 'You are now the leader in {custom_data}! 🎉' },
    hi: { title: 'नया नेता!', message: 'अब आप {custom_data} में नेता हैं! 🎉' }
  },
  'achievement-unlocked': {
    en: { title: 'Achievement Unlocked!', message: 'You unlocked {custom_data} achievement!' },
    hi: { title: 'उपलब्धि अनलॉक!', message: 'आपने {custom_data} उपलब्धि हासिल की!' }
  },
  'admin-announcement': {
    en: { title: 'Announcement', message: 'Admin announcement: {custom_data}' },
    hi: { title: 'घोषणा', message: 'व्यवस्थापक घोषणा: {custom_data}' }
  },
  'system-alert': {
    en: { title: 'System Alert', message: 'System notification: {custom_data}' },
    hi: { title: 'सिस्टम चेतावनी', message: 'सिस्टम सूचना: {custom_data}' }
  }
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

  return notification;
};

const sendBroadcastNotification = async ({ senderId, type, metadata }) => {
  const notification = await createNotification({
    senderId,
    type,
    isBroadcast: true,
    metadata: metadata,
    priority: 'high'
  });

  // Store the broadcast notification in all users' records
  const users = await User.find({});
  await Promise.all(users.map(user => {
    return Notification.create({
      recipient: user._id,
      sender: senderId,
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
      { recipient: new Object(userId) }
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


const getUnreadNotificationsCount = async (userId) => {
  return Notification.countDocuments({
    $or: [
      { recipient: userId, isRead: false }
    ]
  });
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
  markNotificationAsRead,
  getUnreadNotificationsCount
};