const quizService = require('../services/quizService');
const logger = require('../config/logger');

const createQuiz = async (socket, data) => {
  try {
    const quiz = await quizService.createQuiz(data, socket.user._id);
    socket.emit('quiz:create:success', { quiz });
    logger.info(`Quiz created by user ${socket.user._id}`);
  } catch (error) {
    socket.emit('quiz:create:error', { error: error.message,prompt : data.prompt});
    logger.error(`Quiz creation error: ${error.message}`);
  }
};

const refreshQuestion = async (socket, quizId,questionIndex) => {
  try {
    const quiz = await quizService.refreshQuestion(socket.user._id,quizId,questionIndex);
    socket.emit('quiz:refreshQuestion:success', { quiz });
    logger.info(`Quiz created by user ${socket.user._id}`);
  } catch (error) {
    socket.emit('quiz:refreshQuestion:error', { error: error.message });
    logger.error(`Quiz creation error: ${error.message}`);
  }
};

const getPublishedQuiz = async (socket,limit) => {
  try {
    const quizes = await quizService.getPublishedQuiz(socket.user._id,limit);
    socket.emit('quiz:published:success', { quizes });
    logger.info(`Quiz all by user ${socket.user._id}`);
  } catch (error) {
    socket.emit('quiz:published:error', { error: error.message });
    logger.error(`Quiz creation error: ${error.message}`);
  }
};

const getAllQuiz = async (socket) => {
  try {
    const quizes = await quizService.getAllQuiz(socket.user._id);
    socket.emit('quiz:all:success', { quizes });
    logger.info(`Quiz all by user ${socket.user._id}`);
  } catch (error) {
    socket.emit('quiz:all:error', { error: error.message });
    logger.error(`Quiz creation error: ${error.message}`);
  }
};

const getActiveQuizes = async (socket,limit) => {
  try {
    const quizes = await quizService.getActiveQuizes(socket.user._id,limit);
    socket.emit('quiz:active:success', { quizes });
    logger.info(`Quiz all by user ${socket.user._id}`);
  } catch (error) {
    socket.emit('quiz:active:error', { error: error.message });
    logger.error(`Get quiz error: ${error.message}`);
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

const deleteQuiz = async (socket, quizId) => {
  try {
    const quiz = await quizService.deleteQuiz(quizId, socket.user._id);
    socket.emit('quiz:delete:success', { quiz });
  } catch (error) {
    socket.emit('quiz:delete:error', { error: error.message });
    logger.error(`Get quiz error: ${error.message}`);
  }
};

const publish = async (socket, quizId, publish, approvalStatus) => {
  try {
    const quiz = await quizService.publishQuizById(quizId, socket.user._id, publish, approvalStatus);
    socket.emit('quiz:publish:success', { quiz });
  } catch (error) {
    socket.emit('quiz:publish:error', { error: error.message });
    logger.error(`Get quiz error: ${error.message}`);
  }
};

const startWaiting = async (socket, quizId) => {
  try {
    const activeQuiz = await quizService.startWaiting(quizId, socket.user._id);
    socket.emit('quiz:waiting:success', { activeQuiz });
    logger.info(`Quiz ${quizId} hosted by user ${socket.user._id}`);
  } catch (error) {
    socket.emit('quiz:waiting:error', { error: error.message });
    logger.error(`Start waiting error: ${error.message}`);
  }
};

const joinQuiz = async (socket, quizId) => {
  try {
    const activeQuiz = await quizService.joinQuiz(quizId, socket.user._id);
    socket.emit('quiz:join:success', { activeQuiz });
    logger.info(`Quiz ${quizId} joined by new user ${socket.user._id}`);
  } catch (error) {
    socket.emit('quiz:join:error', { error: error.message });
    logger.error(`Start join error: ${error.message}`);
  }
};

const startQuiz = async (socket, quizId) => {
  try {
    const activeQuiz = await quizService.startQuiz(quizId, socket.user._id);
    socket.emit('quiz:start:success', { activeQuiz });
    logger.info(`Quiz ${quizId} start by new user ${socket.user._id}`);
  } catch (error) {
    socket.emit('quiz:start:error', { error: error.message });
    logger.error(`Start join error: ${error.message}`);
  }
};

const submitQuiz = async (socket, quizId) => {
  try {
    const activeQuiz = await quizService.submitQuiz(quizId, socket.user._id);
    socket.emit('quiz:submit:success', { activeQuiz });
    logger.info(`Quiz ${quizId} submitted by user ${socket.user._id}`);
  } catch (error) {
    socket.emit('quiz:submit:error', { error: error.message });
    logger.error(`Submit quiz error: ${error.message}`);
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
  deleteQuiz,
  refreshQuestion,
  getPublishedQuiz,
  submitQuiz,
  joinQuiz,
  startWaiting,
  getActiveQuizes
};