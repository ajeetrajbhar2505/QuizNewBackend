const Quiz = require('../models/Quiz');
const User = require('../models/User');
const ActiveQuiz = require('../models/ActiveQuiz');
const UserStats = require('../models/UserStats');
const logger = require('../config/logger');
const { getIO } = require('../config/socket');
const AimlQuizService = require('./openai.service');

const createQuiz = async (data, userId) => {
  const geminiResponse = await AimlQuizService.generateQuiz(data.prompt);
  const quizDoc = transformGeminiResponseToQuiz(geminiResponse, userId);
  const newQuiz = await Quiz.create(quizDoc);
  return newQuiz;
};

const refreshQuestion = async (userId, quizId, questionIndex) => {
  const geminiResponse = await AimlQuizService.refreshQuestion(quizId, userId, questionIndex);
  await Quiz.findByIdAndUpdate(
    quizId,
    {
      $set: {
        [`questions.${questionIndex}`]: geminiResponse,
        updatedAt: new Date()
      }
    },
    { new: true }
  );

  return geminiResponse;
};



const getAllQuiz = async (userId) => {
  try {
    if (!userId) {
      throw new Error('User ID is required');
    }

    const quizzes = await Quiz.find(
      {
        $or: [
          { isAdminCreated: true },
          { createdBy: userId }
        ]
      },
      {
        difficulty: 1,
        title: 1,
        totalQuestions: 1,
        category: 1,
        description: 1,
        isPublic: 1,
        estimatedTime: 1,
        approvalStatus: 1,
        _id: 1
      }
    ).lean().exec();

    return quizzes
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    throw new Error('Failed to fetch quizzes: ' + error.message);
  }
};

const getPublishedQuiz = async (userId) => {
  try {
    if (!userId) {
      throw new Error('User ID is required');
    }

    const quizzes = await Quiz.find(
      { isPublic: true },
      {
        difficulty: 1,
        title: 1,
        totalQuestions: 1,
        category: 1,
        description: 1,
        isPublic: 1,
        estimatedTime: 1,
        approvalStatus: 1,
        _id: 1
      }
    ).lean().exec();

    return quizzes
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    throw new Error('Failed to fetch quizzes: ' + error.message);
  }
};



const getQuizById = async (quizId) => {
  const quiz = await Quiz.findById(quizId).populate('createdBy', 'name avatar');
  if (!quiz) {
    throw new Error('Quiz not found');
  }
  return quiz;
};

const deleteQuiz = async (quizId, userId) => {
  const quiz = await Quiz.findOne({
    _id: quizId,
    createdBy: userId
  });

  if (!quiz) {
    throw new Error('Quiz not found or you are not the owner');
  }

  // Delete the quiz
  const deletionResult = await Quiz.deleteOne({ _id: quizId });

  if (deletionResult.deletedCount === 0) {
    // This shouldn't happen since we just found the quiz, but handle it anyway
    throw new Error('Failed to delete quiz');
  }

  return deletionResult;
};


const publishQuizById = async (quizId, userId, publish, approvalStatus) => {
  try {
    const quiz = await Quiz.findOne({
      _id: quizId,
      createdBy: userId
    });

    if (!quiz) {
      throw new Error('Quiz not found or you are not the owner');
    }

    const updatedQuiz = await Quiz.findByIdAndUpdate(
      quizId,
      {
        $set: {
          isPublic: publish,
          approvalStatus: approvalStatus,
          updatedAt: new Date()
        }
      },
      { new: true }
    );

    return updatedQuiz;
  } catch (error) {
    console.error('Error publishing quiz:', error);
    throw new Error(error.message || 'Failed to publish quiz');
  }
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

async function transformGeminiResponseToQuiz(geminiResponse, userId) {
  // Transform each question to match your schema

  const user = await User.findById(userId);

  if (!user) {
    throw new Error('User not found');
  }
  const isAdminCreated = user.role === 'admin';


  const transformedQuestions = geminiResponse.questions.map(question => {
    // Convert options object to array while preserving order
    const optionsArray = [
      question.options.a,
      question.options.b,
      question.options.c,
      question.options.d
    ];

    return {
      question: question.questionText,
      options: optionsArray,
      correctAnswer: optionsArray[['a', 'b', 'c', 'd'].indexOf(question.correctAnswer)],
      explanation: question.explanation,
      points: question.points || 10,
      timeLimit: question.timeLimit
    };
  });

  // Create the quiz document
  const quizDoc = {
    title: geminiResponse.title,
    description: geminiResponse.description,
    category: geminiResponse.category,
    difficulty: geminiResponse.title.split(' ')[0].toLowerCase(),
    questions: transformedQuestions,
    estimatedTime: geminiResponse.estimatedTime,
    source: geminiResponse.source,
    totalQuestions: geminiResponse.totalQuestions,
    createdBy: userId,
    isAdminCreated: isAdminCreated,
    isPublic: false,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  // Validate difficulty
  if (!['easy', 'medium', 'hard'].includes(quizDoc.difficulty)) {
    quizDoc.difficulty = 'medium';
  }

  return quizDoc;
}



module.exports = {
  createQuiz,
  getQuizById,
  startQuiz,
  submitAnswer,
  getAllQuiz,
  deleteQuiz,
  publishQuizById,
  refreshQuestion,
  getPublishedQuiz
};