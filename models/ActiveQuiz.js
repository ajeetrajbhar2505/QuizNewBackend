const mongoose = require('mongoose');

const activeQuizSchema = new mongoose.Schema({
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  host: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  participants: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    score: { type: Number, default: 0 },
    answers: [{
      questionId: { type: mongoose.Schema.Types.ObjectId },
      answer: { type: String },
      isCorrect: { type: Boolean },
      points: { type: Number },
    }],
  }],
  currentQuestion: { type: Number, default: 0 },
  status: { type: String, enum: ['waiting', 'in-progress', 'completed'], default: 'waiting' },
  startedAt: { type: Date },
  endedAt: { type: Date },
});

module.exports = mongoose.model('ActiveQuiz', activeQuizSchema);