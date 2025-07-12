const Quiz = require('../models/Quiz');
const ActiveQuiz = require('../models/ActiveQuiz');
const UserStats = require('../models/UserStats');
const logger = require('../config/logger');
const { getIO } = require('../config/socket');
const AimlQuizService = require('./openai.service');

const createQuiz = async (data, userId) => {
  const quizData = await AimlQuizService.generateQuiz(data.prompt);
  const quiz = await Quiz.create({
    ...quizData,
    createdBy: userId,
    source: 'openai'
  });
  return quiz;
};

const getQuizById = async (quizId) => {
  const quiz = await Quiz.findById(quizId).populate('createdBy', 'name avatar');
  if (!quiz) {
    throw new Error('Quiz not found');
  }
  return quiz;
};

const startQuiz = async (quizId, userId) => {
  const quiz = await getQuizById(quizId);
  
  const activeQuiz = await ActiveQuiz.create({
    quiz: quiz._id,
    host: userId,
    status: 'waiting',
    startedAt: new Date(),
  });

  // Join the quiz room
  getIO().sockets.sockets.forEach(socket => {
    if (socket.user?.id === userId) {
      socket.join(`quiz_${quizId}`);
    }
  });

  return activeQuiz;
};

const submitAnswer = async (quizId, questionId, answer, userId) => {
  const activeQuiz = await ActiveQuiz.findOne({
    quiz: quizId,
    status: 'in-progress',
  });
  if (!activeQuiz) {
    throw new Error('No active quiz found');
  }

  const quiz = await Quiz.findById(quizId);
  const question = quiz.questions.id(questionId);
  if (!question) {
    throw new Error('Question not found');
  }

  const isCorrect = question.correctAnswer === answer;
  const points = isCorrect ? question.points : 0;

  // Update participant's answer
  let participant = activeQuiz.participants.find(p => p.user.equals(userId));
  if (!participant) {
    participant = { user: userId, score: 0, answers: [] };
    activeQuiz.participants.push(participant);
  }

  participant.answers.push({
    questionId,
    answer,
    isCorrect,
    points,
  });

  participant.score += points;
  await activeQuiz.save();

  // Update user stats
  await updateUserStats(userId, isCorrect);

  return {
    isCorrect,
    points,
    correctAnswer: question.correctAnswer,
    explanation: question.explanation,
  };
};

const updateUserStats = async (userId, isCorrect) => {
  const stats = await UserStats.findOneAndUpdate(
    { user: userId },
    {
      $inc: {
        totalQuizzes: 1,
        correctAnswers: isCorrect ? 1 : 0,
        wrongAnswers: isCorrect ? 0 : 1,
        points: isCorrect ? 10 : 0,
      },
      lastActive: new Date(),
    },
    { upsert: true, new: true }
  );

  return stats;
};

module.exports = {
  createQuiz,
  getQuizById,
  startQuiz,
  submitAnswer,
};