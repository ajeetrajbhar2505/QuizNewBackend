const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  recipient: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: function() { return !this.isBroadcast } 
  },
  sender: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  },
  isBroadcast: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    enum: [
      'quiz-invitation',       // Invited to join a quiz
      'quiz-start',           // Quiz is starting
      'question-ready',        // Next question is available
      'quiz-ended',           // Quiz has ended
      'results-available',    // Results are ready
      'new-leader',           // You're now the leader
      'achievement-unlocked', // Earned a badge/achievement
      'admin-announcement',   // Admin broadcast
      'system-alert'          // System notification
    ],
    required: true
  },
  title: {
    en: { type: String, required: true },
    hi: { type: String, required: true }
  },
  message: {
    en: { type: String, required: true },
    hi: { type: String, required: true }
  },
  isRead: {
    type: Boolean,
    default: false
  },
  isSeen: {
    type: Boolean,
    default: false
  },
  metadata: {
    type: mongoose.Schema.Types.Mixed  // Additional flexible data
  },
  actionUrl: String,  // Deep link for the notification
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  language: {
    type: String,
    enum: ['en', 'hi'],
    default: 'en'
  }
}, {
  timestamps: true  // Adds createdAt and updatedAt automatically
});

// Indexes for faster queries
notificationSchema.index({ recipient: 1, isRead: 1 });
notificationSchema.index({ recipient: 1, createdAt: -1 });
notificationSchema.index({ isBroadcast: 1, createdAt: -1 });

module.exports = mongoose.model('Notification', notificationSchema);