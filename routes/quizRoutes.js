const quizController = require('../controllers/quizController');

const setupQuizRoutes = (socket) => {
  socket.on('quiz:create', (data) => quizController.createQuiz(socket, data));
  socket.on('quiz:get', (quizId) => quizController.getQuiz(socket, quizId));
  socket.on('quiz:start', (quizId) => quizController.startQuiz(socket, quizId));
  socket.on('quiz:answer:submit', (data) => quizController.submitAnswer(socket, data));
};

module.exports = setupQuizRoutes;