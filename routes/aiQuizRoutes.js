const aiQuizController = require('../controllers/aiQuizController');

const setupAiQuizRoutes = (socket) => {
  socket.on('ai:quiz:generate', (topic) => aiQuizController.generateQuiz(socket, topic));
  socket.on('ai:answer:explain', (data) => aiQuizController.explainAnswer(socket, data));
};

module.exports = setupAiQuizRoutes;