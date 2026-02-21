const Quiz = require('../models/Quiz');
const User = require('../models/User');
const ActiveQuiz = require('../models/ActiveQuiz');
const { getIO } = require('../config/socket');
const AimlQuizService = require('./openai.service');
const { ObjectId } = require('mongoose').Types;
const notificationController = require('../controllers/notificationController');
const UserStats = require('../models/UserStats');

const askQuestion = async (prompt) => {
  const geminiResponse = await AimlQuizService.askQuestion(prompt);
  return geminiResponse;
};


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
        estimatedTime: 1,
        totalPoints: 1,
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
          localField: 'host',
          foreignField: '_id',
          as: 'hostDetails'
        }
      },
      { $unwind: '$hostDetails' },
      {
        $addFields: {
          participantCount: { $size: '$participants' },
          isParticipant: {
            $in: [
              new ObjectId(userId),
              '$participants.user'
            ]
          },
          userSubmissionStatus: {
            $let: {
              vars: {
                userParticipant: {
                  $arrayElemAt: [
                    {
                      $filter: {
                        input: '$participants',
                        cond: { $eq: ['$$this.user', new ObjectId(userId)] }
                      }
                    },
                    0
                  ]
                }
              },
              in: {
                isSubmitted: { $ifNull: ['$$userParticipant.isSubmitted', false] },
                score: { $ifNull: ['$$userParticipant.score', 0] },
                status: { $ifNull: ['$$userParticipant.status', 'waiting'] }
              }
            }
          }
        }
      },
      {
        $project: {
          status: 1,
          remainingParticipants: 1,
          startedAt: 1,
          estimatedTime: '$quizDetails.estimatedTime',
          difficulty: '$quizDetails.difficulty',
          totalQuestions: '$quizDetails.totalQuestions',
          totalPoints: '$quizDetails.totalPoints',
          participantCount: 1,
          title: '$quizDetails.title',
          description: '$quizDetails.description',
          quizId: '$quizDetails._id',
          isParticipant: 1,
          userSubmissionStatus: 1,
          host: {
            _id: '$hostDetails._id',
            name: '$hostDetails.name',
            avatar: '$hostDetails.avatar',
            email: '$hostDetails.email'
          }
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

const getSubmittedQuizes = async (userId, limit) => {
  try {
    if (!userId) {
      throw new Error('User ID is required');
    }

    const pipeline = [
      {
        $match: {
          status: { $in: ['completed'] }
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
          localField: 'host',
          foreignField: '_id',
          as: 'hostDetails'
        }
      },
      { $unwind: '$hostDetails' },
      {
        $addFields: {
          participantCount: { $size: '$participants' },
          isParticipant: {
            $in: [
              new ObjectId(userId),
              '$participants.user'
            ]
          },
          userSubmissionStatus: {
            $let: {
              vars: {
                userParticipant: {
                  $arrayElemAt: [
                    {
                      $filter: {
                        input: '$participants',
                        cond: { $eq: ['$$this.user', new ObjectId(userId)] }
                      }
                    },
                    0
                  ]
                }
              },
              in: {
                isSubmitted: { $ifNull: ['$$userParticipant.isSubmitted', false] },
                score: { $ifNull: ['$$userParticipant.score', 0] },
                status: { $ifNull: ['$$userParticipant.status', 'waiting'] }
              }
            }
          }
        }
      },
      {
        $project: {
          status: 1,
          remainingParticipants: 1,
          startedAt: 1,
          estimatedTime: '$quizDetails.estimatedTime',
          difficulty: '$quizDetails.difficulty',
          totalQuestions: '$quizDetails.totalQuestions',
          totalPoints: '$quizDetails.totalPoints',
          participantCount: 1,
          title: '$quizDetails.title',
          description: '$quizDetails.description',
          quizId: '$quizDetails._id',
          isParticipant: 1,
          userSubmissionStatus: 1,
          host: {
            _id: '$hostDetails._id',
            name: '$hostDetails.name',
            avatar: '$hostDetails.avatar',
            email: '$hostDetails.email'
          }
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


const getParticipants = async (quizId) => {
  try {
    const pipeline = [
      // Stage 1: Match the active quiz
      {
        $match: {
          _id: new ObjectId(quizId)
        }
      },

      // Stage 2: Lookup quiz details
      {
        $lookup: {
          from: 'quizzes',
          localField: 'quiz',
          foreignField: '_id',
          as: 'quizDetails'
        }
      },
      { $unwind: '$quizDetails' },

      // Stage 3: Lookup host details
      {
        $lookup: {
          from: 'users',
          localField: 'host',
          foreignField: '_id',
          as: 'hostDetails'
        }
      },
      { $unwind: '$hostDetails' },

      // Stage 4: Lookup participant details with enhanced pipeline
      {
        $lookup: {
          from: 'users',
          let: { participants: '$participants' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $in: ['$_id', {
                    $map: {
                      input: '$$participants',
                      as: 'p',
                      in: '$$p.user'
                    }
                  }]
                }
              }
            },
            {
              $project: {
                _id: 1,
                name: 1,
                avatar: 1,
                email: 1
              }
            }
          ],
          as: 'participantDetails'
        }
      },

      // Stage 5: Merge participant data with their details and exclude answers
      {
        $addFields: {
          participants: {
            $map: {
              input: '$participants',
              as: 'participant',
              in: {
                $mergeObjects: [
                  {
                    // Only include non-answers fields from participant
                    _id: '$$participant._id',
                    user: '$$participant.user',
                    score: '$$participant.score',
                    isSubmitted: '$$participant.isSubmitted',
                    joinedAt: '$$participant.joinedAt',
                    submittedAt: '$$participant.submittedAt'
                    // Add other fields you want to keep, but exclude 'answers'
                  },
                  {
                    $arrayElemAt: [
                      {
                        $filter: {
                          input: '$participantDetails',
                          as: 'pd',
                          cond: { $eq: ['$$pd._id', '$$participant.user'] }
                        }
                      },
                      0
                    ]
                  }
                ]
              }
            }
          },
          participantCount: { $size: '$participants' }
        }
      },

      // Stage 6: Project the final structure
      {
        $project: {
          _id: 0,
          quizId: '$quizDetails._id',
          title: '$quizDetails.title',
          description: '$quizDetails.description',
          difficulty: '$quizDetails.difficulty',
          totalQuestions: '$quizDetails.totalQuestions',
          estimatedTime: '$quizDetails.estimatedTime',
          status: 1,
          startedAt: 1,
          participantCount: 1,
          host: {
            _id: '$hostDetails._id',
            name: '$hostDetails.name',
            avatar: '$hostDetails.avatar',
            email: '$hostDetails.email'
          },
          participants: 1
        }
      }
    ];

    const result = await ActiveQuiz.aggregate(pipeline).exec();
    return result[0] || null;
  } catch (error) {
    console.error('Error fetching quiz with participants:', error);
    throw new Error('Failed to fetch quiz details: ' + error.message);
  }
};

const getPublishedQuiz = async (userId, limit) => {
  try {
    if (!userId) {
      throw new Error('User ID is required');
    }

    // Base query for approved public quizzes
    const query = Quiz.find(
      { approvalStatus: 'approved' },
      {
        difficulty: 1,
        title: 1,
        totalQuestions: 1,
        category: 1,
        description: 1,
        totalPoints: 1,
        source: 1,
        estimatedTime: 1,
        approvalStatus: 1,
        _id: 1,
        createdAt: 1
      }
    ).lean();

    if (limit > 0) {
      query.limit(limit);
    }

    query.sort({ createdAt: -1 });

    const quizzes = await query.exec();

    // Get all active quizzes that are NOT completed
    const activeQuizzes = await ActiveQuiz.find(
      { status: { $ne: 'completed' } },  // Only include non-completed
      { quiz: 1, status: 1, startedAt: 1 }
    ).lean();

    // Create a map of active quiz IDs with their status
    const activeQuizMap = new Map();
    activeQuizzes.forEach(activeQuiz => {
      activeQuizMap.set(activeQuiz.quiz.toString(), {
        isLive: true,
        status: activeQuiz.status,
        startedAt: activeQuiz.startedAt
      });
    });

    // Add isLive flag and filter out completed quizzes
    const filteredQuizzes = quizzes.map(quiz => {
      const activeQuizInfo = activeQuizMap.get(quiz._id.toString());
      return {
        ...quiz,
        isLive: !!activeQuizInfo,
        status: activeQuizInfo?.status || 'inactive',
        startedAt: activeQuizInfo?.startedAt || null
      };
    });

    return filteredQuizzes;
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


const publishQuizById = async (quizId, userId, approvalStatus) => {
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

  const activeQuiz = await ActiveQuiz.findOne({
    quiz: quizId,
    status: 'in-progress'
  });

  if (activeQuiz) {
    throw new Error('Cannot view quiz while it is in progress. Please try again after the quiz ends.');
  }

  const quiz = await Quiz.findById(quizId);
  if (!quiz) throw new Error('Quiz not found');
  return quiz;
};


// Helper function to get quiz by ID
const getLiveQuizById = async (quizId) => {

  const quiz = await Quiz.findById(quizId);
  if (!quiz) throw new Error('Quiz not found');

  return quiz;
};

// Start waiting period for quiz
const startWaiting = async (quizId, userId) => {
  const [quiz, user] = await Promise.all([
    getQuizById(quizId),
    User.findById(userId)
  ]);

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
  let notificationMetadata = {
    custom_data: quiz.title,
    inviterName: user.name
  }
  return { activeQuiz, notificationMetadata };
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

// Submit the quiz (mark user's participation as completed)
const submitQuiz = async (quizId, userId) => {
  const activeQuiz = await ActiveQuiz.findOne({
    quiz: quizId,
    status: 'in-progress',
    'participants.user': userId
  });

  if (!activeQuiz) {
    throw new Error('No active quiz found or you are not a participant');
  }

  // Find the participant and mark as completed
  const participantIndex = activeQuiz.participants.findIndex(
    p => p.user.toString() === userId.toString()
  );

  if (participantIndex === -1) {
    throw new Error('User is not a participant in this quiz');
  }

  // Update participant's end time and status
  activeQuiz.participants[participantIndex].isSubmitted = true
  activeQuiz.participants[participantIndex].endedAt = new Date();
  activeQuiz.participants[participantIndex].status = 'completed';

  // Check if all participants have completed
  const allCompleted = activeQuiz.participants.every(
    p => p.status === 'completed' || p.status === 'disconnected'
  );

  // If all participants completed, mark the entire quiz as completed
  if (allCompleted) {
    activeQuiz.isSubmitted = true;
    activeQuiz.status = 'completed';
    activeQuiz.endedAt = new Date();
  }

  await activeQuiz.save();
  const quiz = await Quiz.findById(quizId)


  // Notify the host that a participant has submitted
  const io = getIO();
  io.to(`quiz_${quizId}`).emit('quiz:participant-submitted', {
    userId,
    activeQuiz
  });

  // If quiz is fully completed, notify everyone
  if (allCompleted) {
    io.to(`quiz_${quizId}`).emit('quiz:completed', { activeQuiz });
  }

  notificationController.sendNotification(userId, { recipientId: userId, type: 'quiz-ended', metadata: { custom_data: quiz.title } })
  return activeQuiz;
};


// Host/admin version to complete the entire quiz
const completeQuizByHost = async (senderId, quizId, userId) => {
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
  const quiz = await Quiz.findById(quizId)

  // Complete all participants' sessions
  activeQuiz.participants.forEach(participant => {
    if (!participant.endedAt) {
      participant.endedAt = new Date();
      participant.status = 'completed';
      notificationController.sendNotification(senderId, { recipientId: participant.user, type: 'quiz-ended', metadata: { custom_data: quiz.title } })
    }
  });
  await activeQuiz.save();
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

  // Check if user has already answered this question
  const existingAnswerIndex = participant.answers.findIndex(a => a.question.equals(questionId));

  const isCorrect = question.correctAnswer === answer;
  const points = isCorrect ? question.points : 0;

  let statsUpdateData = {
    isNewAnswer: false,
    previousPoints: 0,
    previousCorrectness: false
  };

  if (existingAnswerIndex !== -1) {
    // User already answered - update existing answer and adjust score
    const previousAnswer = participant.answers[existingAnswerIndex];
    statsUpdateData.previousPoints = previousAnswer.points;
    statsUpdateData.previousCorrectness = previousAnswer.isCorrect;

    // Update the existing answer
    participant.answers[existingAnswerIndex] = {
      question: questionId,
      answer: answer,
      isCorrect: isCorrect,
      points: points,
      answeredAt: new Date()
    };

    // Adjust score by removing previous points and adding new points
    participant.score = participant.score - statsUpdateData.previousPoints + points;
  } else {
    // New answer - record it and add points
    statsUpdateData.isNewAnswer = true;
    participant.answers.push({
      question: questionId,
      answer: answer,
      isCorrect: isCorrect,
      points: points,
      answeredAt: new Date()
    });
    participant.score += points;
  }

  participant.endedAt = new Date();

  // Save the active quiz first
  await activeQuiz.save();

  // Update user statistics
  await updateUserStats(userId, isCorrect, points, statsUpdateData);

  return {
    isCorrect,
    points,
    currentScore: participant.score,
  };
};

// Helper function to update user statistics
const updateUserStats = async (userId, isCorrect, points, statsUpdateData) => {
  const now = new Date();
  const today = new Date(now.setHours(0, 0, 0, 0));

  const updateData = {
    $inc: {
      points: points - statsUpdateData.previousPoints
    },
    $set: {
      lastActive: now
    }
  };

  // Handle correct/wrong answer counters and total quizzes
  if (!statsUpdateData.isNewAnswer) {
    // This is an answer update - adjust counters based on previous and current correctness
    if (statsUpdateData.previousCorrectness && !isCorrect) {
      // Was correct, now wrong
      updateData.$inc.correctAnswers = -1;
      updateData.$inc.wrongAnswers = 1;
    } else if (!statsUpdateData.previousCorrectness && isCorrect) {
      // Was wrong, now correct
      updateData.$inc.correctAnswers = 1;
      updateData.$inc.wrongAnswers = -1;
    }
    // If both previous and current are same (both correct or both wrong), no change needed
  } else {
    // This is a new answer
    updateData.$inc.totalQuizzes = 1;
    if (isCorrect) {
      updateData.$inc.correctAnswers = 1;
    } else {
      updateData.$inc.wrongAnswers = 1;
    }
  }

  // Handle streak logic
  const userStats = await UserStats.findOne({ user: userId });
  if (userStats) {
    const lastUpdated = new Date(userStats.streak.lastUpdated);
    const lastUpdatedDate = new Date(lastUpdated.setHours(0, 0, 0, 0));

    if (lastUpdatedDate.getTime() === today.getTime()) {
      // Already updated today, no streak change needed
    } else if (lastUpdatedDate.getTime() === today.getTime() - 86400000) {
      // Consecutive day - increment streak
      updateData.$inc = {
        ...updateData.$inc,
        'streak.current': 1
      };
      updateData.$set = {
        ...updateData.$set,
        'streak.lastUpdated': today
      };

      // Update longest streak if current exceeds it
      if (userStats.streak.current + 1 > userStats.streak.longest) {
        updateData.$set['streak.longest'] = userStats.streak.current + 1;
      }
    } else {
      // Broken streak - reset to 1
      updateData.$set = {
        ...updateData.$set,
        'streak.current': 1,
        'streak.lastUpdated': today
      };
    }
  } else {
    // First time user - initialize streak
    updateData.$set = {
      ...updateData.$set,
      'streak.current': 1,
      'streak.lastUpdated': today,
      'streak.longest': 1
    };
  }

  await UserStats.findOneAndUpdate(
    { user: userId },
    updateData,
    { upsert: true, new: true }
  );
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
    totalPoints: geminiResponse.totalPoints,
    totalQuestions: geminiResponse.totalQuestions,
    createdBy: userId,
    isAdminCreated: isAdminCreated,
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
  getLiveQuizById,
  getSubmittedQuizes,
  startQuiz,
  submitAnswer,
  getAllQuiz,
  deleteQuiz,
  publishQuizById,
  refreshQuestion,
  getPublishedQuiz,
  submitQuiz,
  completeQuizByHost,
  joinQuiz,
  startWaiting,
  getActiveQuizes,
  getParticipants,
  askQuestion
};