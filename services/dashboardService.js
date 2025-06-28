const UserStats = require('../models/UserStats');
const Quiz = require('../models/Quiz');
const ActiveQuiz = require('../models/ActiveQuiz');
const logger = require('../config/logger');

const getUserStats = async (userId) => {
  const stats = await UserStats.findOne({ user: userId });
  const quizCount = await Quiz.countDocuments({ createdBy: userId });
  const activeQuizCount = await ActiveQuiz.countDocuments({ host: userId });

  return {
    points: stats?.points || 0,
    correctAnswers: stats?.correctAnswers || 0,
    wrongAnswers: stats?.wrongAnswers || 0,
    quizzesCreated: quizCount,
    quizzesHosted: activeQuizCount,
    rank: stats?.rank || 0,
  };
};

const getRecentActivity = async (userId) => {
  const quizzes = await Quiz.find({ createdBy: userId })
    .sort({ createdAt: -1 })
    .limit(5)
    .select('title createdAt');

  const hostedQuizzes = await ActiveQuiz.find({ host: userId })
    .sort({ startedAt: -1 })
    .limit(5)
    .populate('quiz', 'title')
    .select('quiz startedAt');

  return {
    quizzesCreated: quizzes,
    quizzesHosted: hostedQuizzes,
  };
};

module.exports = {
  getUserStats,
  getRecentActivity,
};