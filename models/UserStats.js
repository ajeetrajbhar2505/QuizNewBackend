const mongoose = require('mongoose');

const userStatsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  totalQuizzes: { type: Number, default: 0 },
  correctAnswers: { type: Number, default: 0 },
  wrongAnswers: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  rank: { type: Number },
  lastActive: { type: Date },
  streak: {
    current: { type: Number, default: 0 },
    longest: { type: Number, default: 0 },
    lastUpdated: { type: Date }
  },
  achievements: [{
    name: { type: String },
    date: { type: Date, default: Date.now },
  }],
}, { timestamps: true });


userStatsSchema.methods.updateStreak = function() {
  const now = new Date();
  const lastUpdated = this.streak.lastUpdated || new Date(0);
  
  // Reset time parts for comparison
  const lastUpdatedDate = new Date(
    lastUpdated.getFullYear(),
    lastUpdated.getMonth(),
    lastUpdated.getDate()
  );
  
  const currentDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );

  const dayDiff = Math.floor((currentDate - lastUpdatedDate) / (1000 * 60 * 60 * 24));

  if (dayDiff === 0) {
    // Already updated today
    return;
  }

  if (dayDiff === 1) {
    // Consecutive day
    this.streak.current += 1;
  } else {
    // Broken streak
    this.streak.current = 1;
  }

  // Update longest streak if needed
  if (this.streak.current > this.streak.longest) {
    this.streak.longest = this.streak.current;
  }

  this.streak.lastUpdated = currentDate;
};

const UserStats = mongoose.model('UserStats', userStatsSchema);
module.exports = UserStats;