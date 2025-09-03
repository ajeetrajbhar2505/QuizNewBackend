const quizController = require('../controllers/quizController');

const setupQuizRoutes = (socket) => {
  socket.on('quiz:create', (data) => quizController.createQuiz(socket, data));
  socket.on('quiz:all', () => quizController.getAllQuiz(socket));
  socket.on('quiz:active', (limit = 0) => quizController.getActiveQuizes(socket,limit));
  socket.on('quiz:SubmittedQuizes', () => quizController.getSubmittedQuizes(socket));
  socket.on('quiz:get', (quizId) => quizController.getQuiz(socket, quizId));
  socket.on('livequiz:get', (quizId) => quizController.getLiveQuiz(socket, quizId));
  socket.on('quiz:publish', (quizId, publish, approvalStatus) => quizController.publish(socket, quizId, publish, approvalStatus));
  socket.on('quiz:refreshQuestion', (quizId,questionIndex) => quizController.refreshQuestion(socket, quizId,questionIndex));
  socket.on('quiz:published', (limit = 0) => quizController.getPublishedQuiz(socket,limit));
  socket.on('quiz:waiting', (quizId) => quizController.startWaiting(socket, quizId));
  socket.on('quiz:join', (quizId) => quizController.joinQuiz(socket, quizId));
  socket.on('quiz:start', (quizId) => quizController.startQuiz(socket, quizId));
  socket.on('quiz:participants', (quizId) => quizController.getParticipants(socket, quizId));
  socket.on('quiz:delete', (quizId) => quizController.deleteQuiz(socket, quizId));
  socket.on('quiz:answer:submit', (data) => quizController.submitAnswer(socket, data));
  socket.on('quiz:submit', (data) => quizController.submitQuiz(socket, data));
  socket.on('quiz:completeQuizByHost', (data) => quizController.completeQuizByHost(socket, data));
};

module.exports = setupQuizRoutes;