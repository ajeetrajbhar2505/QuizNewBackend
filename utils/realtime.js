const { getIO } = require('../config/socket');
const logger = require('../config/logger');

const broadcastQuizStart = (quizId, quizData) => {
  try {
    const io = getIO();
    io.to(`quiz_${quizId}`).emit('quiz:started', quizData);
    logger.info(`Quiz ${quizId} started broadcast`);
  } catch (error) {
    logger.error('Broadcast quiz start error:', error);
  }
};

const notifyUser = (userId, event, data) => {
  try {
    const io = getIO();
    io.to(`user_${userId}`).emit(event, data);
    logger.info(`Notification sent to user ${userId}: ${event}`);
  } catch (error) {
    logger.error('User notification error:', error);
  }
};

const updateLeaderboard = () => {
  try {
    const io = getIO();
    io.emit('leaderboard:update');
    logger.info('Leaderboard update broadcast');
  } catch (error) {
    logger.error('Leaderboard update error:', error);
  }
};

module.exports = {
  broadcastQuizStart,
  notifyUser,
  updateLeaderboard,
};