const mongoose = require('mongoose');

const badgeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  criteria: { type: String, required: true },
  pointsRequired: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Badge', badgeSchema);