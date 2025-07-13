const quizService = require('../services/quizService');
const logger = require('../config/logger');
const { getIO } = require('../config/socket');

const createQuiz = async (socket, data) => {
  try {
    const quiz = await quizService.createQuiz(data, socket.user._id);
    socket.emit('quiz:create:success', { quiz });
    logger.info(`Quiz created by user ${socket.user._id}`);
  } catch (error) {
    socket.emit('quiz:create:error', { error: error.message });
    logger.error(`Quiz creation error: ${error.message}`);
  }
};

const refreshQuestion = async (socket, quizId,questionIndex) => {
  try {
    const quiz = await quizService.refreshQuestion(socket.user._id,quizId,questionIndex);
    socket.emit('quiz:refreshQuestion:success', { quiz });
    logger.info(`Quiz created by user ${socket.user._id}`);
  } catch (error) {
    socket.emit('quiz:create:error', { error: error.message });
    logger.error(`Quiz creation error: ${error.message}`);
  }
};

const getAllQuiz = async (socket) => {
  try {
    const quizes = await quizService.getAllQuiz(socket.user._id);
    socket.emit('quiz:all:success', { quizes });
    logger.info(`Quiz created by user ${socket.user._id}`);
  } catch (error) {
    socket.emit('quiz:create:error', { error: error.message });
    logger.error(`Quiz creation error: ${error.message}`);
  }
};


const getQuiz = async (socket, quizId) => {
  try {
    const quiz = await quizService.getQuizById(quizId);
    socket.emit('quiz:get:success', { quiz });
  } catch (error) {
    socket.emit('quiz:get:error', { error: error.message });
    logger.error(`Get quiz error: ${error.message}`);
  }
};

const publish = async (socket, quizId, publish, approvalStatus) => {
  try {
    const quiz = await quizService.publishQuizById(quizId, socket.user._id, publish, approvalStatus);
    socket.emit('quiz:publish:success', { quiz });
  } catch (error) {
    socket.emit('quiz:get:error', { error: error.message });
    logger.error(`Get quiz error: ${error.message}`);
  }
};

const startQuiz = async (socket, quizId) => {
  try {
    const activeQuiz = await quizService.startQuiz(quizId, socket.user._id);
    getIO().to(`quiz_${quizId}`).emit('quiz:start:success', { activeQuiz });
    logger.info(`Quiz ${quizId} started by user ${socket.user._id}`);
  } catch (error) {
    socket.emit('quiz:start:error', { error: error.message });
    logger.error(`Start quiz error: ${error.message}`);
  }
};

const submitAnswer = async (socket, { quizId, questionId, answer }) => {
  try {
    const result = await quizService.submitAnswer(
      quizId,
      questionId,
      answer,
      socket.user._id
    );
    socket.emit('quiz:answer:success', { result });
    logger.info(`Answer submitted by user ${socket.user._id}`);
  } catch (error) {
    socket.emit('quiz:answer:error', { error: error.message });
    logger.error(`Answer submission error: ${error.message}`);
  }
};

module.exports = {
  createQuiz,
  getQuiz,
  startQuiz,
  submitAnswer,
  getAllQuiz,
  publish,
  refreshQuestion
};