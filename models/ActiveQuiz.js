const mongoose = require('mongoose');
const activeQuizSchema = new mongoose.Schema({
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  host: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  participants: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    score: { type: Number, default: 0 },
    status: { type: String, enum: ['in-progress', 'completed'], default: 'in-progress' },
    answers: [{
      question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
      answer: { type: String, required: true },
      isCorrect: { type: Boolean, required: true },
      points: { type: Number, required: true },
      answeredAt: { type: Date, default: Date.now }
    }],
    startedAt: { type: Date, default: Date.now },
    endedAt: { type: Date }
  }],
  status: { type: String, enum: ['waiting', 'in-progress', 'completed'], default: 'pending' },
  startedAt: { type: Date },
  endedAt: { type: Date }
});
module.exports = mongoose.model('ActiveQuiz', activeQuizSchema);