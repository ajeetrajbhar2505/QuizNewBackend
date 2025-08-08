const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  recipient: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  sender: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  },
  type: {
    type: String,
    enum: [
      'quiz-invitation',       // Invited to join a quiz
      'quiz-start',           // Quiz is starting
      'question-ready',        // Next question is available
      'quiz-ended',           // Quiz has ended
      'results-available',    // Results are ready
      'new-leader',          // You're now the leader
      'achievement-unlocked' // Earned a badge/achievement
    ],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
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
  }
}, {
  timestamps: true  // Adds createdAt and updatedAt automatically
});

// Indexes for faster queries
notificationSchema.index({ recipient: 1, isRead: 1 });
notificationSchema.index({ recipient: 1, createdAt: -1 });

module.exports = mongoose.model('Notification', notificationSchema);