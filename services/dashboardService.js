const UserStats = require('../models/UserStats');
const Quiz = require('../models/Quiz');
const ActiveQuiz = require('../models/ActiveQuiz');
const logger = require('../config/logger');

const getUserStats = async (userId) => {
  try {
    const [stats = null, quizCount, activeQuizCount] = await Promise.all([
      UserStats.findOne({ user: userId }).lean(),
      Quiz.countDocuments({ createdBy: userId }),
      ActiveQuiz.countDocuments({ host: userId })
    ]);

    return {
      points: stats?.points ?? 0,
      correctAnswers: stats?.correctAnswers ?? 0,
      wrongAnswers: stats?.wrongAnswers ?? 0,
      rank: stats?.rank ?? 0,
      quizzesCreated: quizCount,
      quizzesHosted: activeQuizCount,
      streak: {
        current: stats?.streak?.current ?? 0,
        longest: stats?.streak?.longest ?? 0,
        lastUpdated: stats?.streak?.lastUpdated ?? null
      }
    };
  } catch (error) {
    console.error('Error fetching user stats:', error);
    return {
      points: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      rank: 0,
      quizzesCreated: 0,
      quizzesHosted: 0,
      streak: {
        current: 0,
        longest: 0,
        lastUpdated: null
      }
    };
  }
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