const mongoose = require('mongoose');

const userStatsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  totalQuizzes: { type: Number, default: 0 },
  correctAnswers: { type: Number, default: 0 },
  wrongAnswers: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  rank: { type: Number },
  lastActive: { type: Date },
  achievements: [{
    name: { type: String },
    date: { type: Date, default: Date.now },
  }],
});

module.exports = mongoose.model('UserStats', userStatsSchema);