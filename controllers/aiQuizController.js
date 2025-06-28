const aiService = require('../services/aiService');
const logger = require('../config/logger');

const generateQuiz = async (socket, topic) => {
  try {
    const quiz = await aiService.generateQuiz(topic);
    socket.emit('ai:quiz:generate:success', { quiz });
    logger.info(`AI quiz generated for topic: ${topic}`);
  } catch (error) {
    socket.emit('ai:quiz:generate:error', { error: error.message });
    logger.error(`AI quiz generation error: ${error.message}`);
  }
};

const explainAnswer = async (socket, { question, answer }) => {
  try {
    const explanation = await aiService.explainAnswer(question, answer);
    socket.emit('ai:answer:explain:success', { explanation });
  } catch (error) {
    socket.emit('ai:answer:explain:error', { error: error.message });
    logger.error(`AI answer explanation error: ${error.message}`);
  }
};

module.exports = {
  generateQuiz,
  explainAnswer,
};