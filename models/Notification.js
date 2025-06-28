const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  isRead: { type: Boolean, default: false },
  type: { type: String, enum: ['info', 'warning', 'success', 'error'], default: 'info' },
  link: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Notification', notificationSchema);