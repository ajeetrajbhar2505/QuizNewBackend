const mongoose = require('mongoose');

const apiLogSchema = new mongoose.Schema({
  endpoint: { type: String, required: true },
  method: { type: String, required: true },
  statusCode: { type: Number, required: true },
  responseTime: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  ipAddress: { type: String },
  userAgent: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ApiLog', apiLogSchema);