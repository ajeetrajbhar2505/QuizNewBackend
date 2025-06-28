const { validateEmail, validatePassword } = require('./helpers');

const validateRegisterInput = (email, password, name) => {
  if (!email || !password || !name) {
    throw new Error('All fields are required');
  }

  if (!validateEmail(email)) {
    throw new Error('Invalid email format');
  }

  if (!validatePassword(password)) {
    throw new Error('Password must be at least 6 characters');
  }

  return true;
};

const validateLoginInput = (email, password) => {
  if (!email || !password) {
    throw new Error('Email and password are required');
  }

  return true;
};

const validateQuizInput = (quizData) => {
  if (!quizData.title || !quizData.category || !quizData.questions) {
    throw new Error('Title, category, and questions are required');
  }

  if (!Array.isArray(quizData.questions) || quizData.questions.length === 0) {
    throw new Error('At least one question is required');
  }

  quizData.questions.forEach((q) => {
    if (!q.question || !q.options || !q.correctAnswer) {
      throw new Error('Each question must have question text, options, and correct answer');
    }
  });

  return true;
};

module.exports = {
  validateRegisterInput,
  validateLoginInput,
  validateQuizInput,
};