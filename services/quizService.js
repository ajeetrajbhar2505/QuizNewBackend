const Quiz = require('../models/Quiz');
const User = require('../models/User');
const ActiveQuiz = require('../models/ActiveQuiz');
const UserStats = require('../models/UserStats');
const logger = require('../config/logger');
const { getIO } = require('../config/socket');
const AimlQuizService = require('./openai.service');

const createQuiz = async (data, userId) => {
  const geminiResponse = await AimlQuizService.generateQuiz(data.prompt);
  const quizDoc = await transformGeminiResponseToQuiz(geminiResponse, userId);
  const newQuiz = await Quiz.create(quizDoc);
  if (quizDoc.isAdminCreated) {
    await createAdminQuizzesForTutors(quizDoc, newQuiz._id);
  }
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
        createdBy: userId
      },
      {
        difficulty: 1,
        title: 1,
        totalQuestions: 1,
        category: 1,
        description: 1,
        isPublic: 1,
        estimatedTime: 1,
        source: 1,
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

const getActiveQuizes = async (userId, limit) => {
  try {
    if (!userId) {
      throw new Error('User ID is required');
    }

    const pipeline = [
      {
        $match: {
          status: { $in: ['waiting', 'in-progress'] }
        }
      },
      {
        $lookup: {
          from: 'quizzes',
          localField: 'quiz',
          foreignField: '_id',
          as: 'quizDetails'
        }
      },
      { $unwind: '$quizDetails' },
      {
        $lookup: {
          from: 'users',
          localField: 'quizDetails.createdBy',
          foreignField: '_id',
          as: 'creatorDetails'
        }
      },
      { $unwind: '$creatorDetails' },
      {
        $addFields: {
          participantCount: { $size: '$participants' },
          participants: { $slice: ["$participants", 2] },
          remainingParticipants: {
            $cond: [
              { $gt: [{ $size: "$participants" }, 2] },
              { $subtract: [{ $size: "$participants" }, 2] },
              0
            ]
          }
        }
      },
      {
        $project: {
          status: 1,
          participants: 1,
          startedAt: 1,
          participants: {
            _id: 1,
            score: 1,
            name: '$creatorDetails.name',
            profilePic: '$creatorDetails.avatar',
          },
          participantCount: 1,
          title: '$quizDetails.title',
          description: '$quizDetails.description',
        }
      }
    ];

    // Add $limit stage only if limit > 0
    if (limit > 0) {
      pipeline.push({ $limit: limit });
    }

    const quizzes = await ActiveQuiz.aggregate(pipeline).exec();
    return quizzes;
  } catch (error) {
    console.error('Error fetching active quizzes:', error);
    throw new Error('Failed to fetch active quizzes: ' + error.message);
  }
};

const getPublishedQuiz = async (userId, limit) => {
  try {
    if (!userId) {
      throw new Error('User ID is required');
    }

    // Base query for public quizzes
    const query = Quiz.find(
      { isPublic: true },
      {
        difficulty: 1,
        title: 1,
        totalQuestions: 1,
        category: 1,
        description: 1,
        isPublic: 1,
        source: 1,
        estimatedTime: 1,
        approvalStatus: 1,
        _id: 1
      }
    ).lean();

    // Only apply limit if it's greater than 0
    if (limit > 0) {
      query.limit(limit);
    }

    // Execute the query
    const quizzes = await query.exec();
    return quizzes;
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    throw new Error('Failed to fetch quizzes: ' + error.message);
  }
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

// Helper function to get quiz by ID
const getQuizById = async (quizId) => {
  const quiz = await Quiz.findById(quizId);
  if (!quiz) throw new Error('Quiz not found');
  return quiz;
};

// Start waiting period for quiz
const startWaiting = async (quizId, userId) => {
  const quiz = await getQuizById(quizId);

  // Check if there's already an active quiz
  const existingActiveQuiz = await ActiveQuiz.findOne({
    quiz: quizId,
    status: { $in: ['waiting', 'in-progress'] }
  });

  if (existingActiveQuiz) {
    throw new Error('Quiz is already active or waiting for participants');
  }

  const activeQuiz = await ActiveQuiz.create({
    quiz: quiz._id,
    host: userId,
    status: 'waiting',
    startedAt: new Date(),
  });

  // Join the quiz room
  const io = getIO();
  io.to(`user_${userId}`).socketsJoin(`quiz_${quizId}`);

  return activeQuiz;
};

// Start the quiz (transition from waiting to in-progress)
const startQuiz = async (quizId, userId) => {
  const activeQuiz = await ActiveQuiz.findOneAndUpdate(
    {
      quiz: quizId,
      host: userId,
      status: 'waiting'
    },
    {
      status: 'in-progress',
      startedAt: new Date()
    },
    { new: true }
  );

  if (!activeQuiz) {
    throw new Error('No waiting quiz found or you are not the host');
  }

  // Notify all participants
  const io = getIO();
  io.to(`quiz_${quizId}`).emit('quiz:started', { activeQuiz });

  return activeQuiz;
};

// Join an in-progress quiz
const joinQuiz = async (quizId, userId) => {
  const activeQuiz = await ActiveQuiz.findOne({
    quiz: quizId,
    status: 'waiting'
  });

  if (!activeQuiz) {
    throw new Error('No active quiz found to join');
  }

  // Check if user is already a participant
  const isParticipant = activeQuiz.participants.some(p => p.user.equals(userId));
  if (isParticipant) {
    throw new Error('You have already joined this quiz');
  }

  // Add participant
  activeQuiz.participants.push({
    user: userId,
    startedAt: new Date()
  });

  await activeQuiz.save();

  // Join the quiz room
  const io = getIO();
  io.to(`user_${userId}`).socketsJoin(`quiz_${quizId}`);

  // Notify others about new participant
  io.to(`quiz_${quizId}`).emit('quiz:participant-joined', {
    userId,
    participantCount: activeQuiz.participants.length
  });

  return activeQuiz;
};

// Submit the quiz (mark as completed)
const submitQuiz = async (quizId, userId) => {
  const activeQuiz = await ActiveQuiz.findOneAndUpdate(
    {
      quiz: quizId,
      host: userId,
      status: 'in-progress'
    },
    {
      status: 'completed',
      endedAt: new Date()
    },
    { new: true }
  );

  if (!activeQuiz) {
    throw new Error('No active quiz found or you are not the host');
  }

  // Complete all participants' sessions
  activeQuiz.participants.forEach(participant => {
    if (!participant.endedAt) {
      participant.endedAt = new Date();
    }
  });
  await activeQuiz.save();

  // Notify all participants
  const io = getIO();
  io.to(`quiz_${quizId}`).emit('quiz:completed', { activeQuiz });

  return activeQuiz;
};

// Submit an answer to a quiz question
const submitAnswer = async (quizId, questionId, answer, userId) => {
  const activeQuiz = await ActiveQuiz.findOne({
    quiz: quizId,
    status: 'in-progress'
  });

  if (!activeQuiz) {
    throw new Error('No active quiz found');
  }

  const quiz = await Quiz.findById(quizId).populate('questions');
  const question = quiz.questions.find(q => q._id.equals(questionId));

  if (!question) {
    throw new Error('Question not found');
  }

  const isCorrect = question.correctAnswer === answer;
  const points = isCorrect ? question.points : 0;

  // Find or create participant
  let participant = activeQuiz.participants.find(p => p.user.equals(userId));
  if (!participant) {
    participant = {
      user: userId,
      score: 0,
      answers: [],
      startedAt: new Date()
    };
    activeQuiz.participants.push(participant);
  }

  // Check if question was already answered
  const existingAnswer = participant.answers.find(a => a.question.equals(questionId));
  if (existingAnswer) {
    throw new Error('Question already answered');
  }

  // Update participant's answer and score
  participant.answers.push({
    question: questionId,
    answer,
    isCorrect,
    answeredAt: new Date()
  });

  participant.score += points;
  await activeQuiz.save();

  // Update user stats
  await User.findByIdAndUpdate(userId, {
    $inc: {
      totalPoints: points,
      quizzesTaken: participant.answers.length === quiz.questions.length ? 1 : 0,
      correctAnswers: isCorrect ? 1 : 0
    }
  });

  // Notify host about answer submission
  const io = getIO();
  io.to(`user_${activeQuiz.host}`).emit('quiz:answer-submitted', {
    userId,
    questionId,
    isCorrect,
    score: participant.score
  });

  return {
    isCorrect,
    points,
    currentScore: participant.score,
    correctAnswer: question.correctAnswer,
    explanation: question.explanation,
    questionsRemaining: quiz.questions.length - participant.answers.length
  };
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


async function createAdminQuizzesForTutors(baseQuiz, originalQuizId) {
  const tutors = await User.find({ role: 'tutor' }).select('_id');

  // Bulk insert optimized for performance
  const quizCopies = tutors.map(tutor => ({
    ...baseQuiz,
    createdBy: tutor._id,
    isAdminCreated: true,
    isPublic: false,
    source: 'admin-template',
    originalQuizId: originalQuizId,
    approvalStatus: 'pending'
  }));

  const createdQuizzes = await Quiz.insertMany(quizCopies);

  return createdQuizzes[0];
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
  getPublishedQuiz,
  submitQuiz,
  joinQuiz,
  startWaiting,
  getActiveQuizes
};