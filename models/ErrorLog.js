const mongoose = require('mongoose');

const errorLogSchema = new mongoose.Schema({
  message: { type: String, required: true },
  stack: { type: String },
  endpoint: { type: String },
  method: { type: String },
  statusCode: { type: Number },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  ipAddress: { type: String },
  userAgent: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ErrorLog', errorLogSchema);