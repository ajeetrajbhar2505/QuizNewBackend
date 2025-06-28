const { OpenAI } = require('openai');
const Quiz = require('../models/Quiz');
const logger = require('../config/logger');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateQuiz = async (topic) => {
  try {
    const prompt = `Generate a quiz with 5 questions about ${topic}. Each question should have 4 options and a correct answer. Format the response as a JSON object with this structure:
    {
      "title": "Quiz about ${topic}",
      "description": "A quiz to test your knowledge about ${topic}",
      "questions": [
        {
          "question": "Question text",
          "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
          "correctAnswer": "Option X",
          "explanation": "Explanation why this is correct"
        }
      ]
    }`;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    });

    const content = response.choices[0].message.content;
    const quizData = JSON.parse(content);
    
    return quizData;
  } catch (error) {
    logger.error('AI quiz generation error:', error);
    throw new Error('Failed to generate quiz');
  }
};

const explainAnswer = async (question, answer) => {
  try {
    const prompt = `Given the question: "${question}" and the answer: "${answer}", provide a detailed explanation if this answer is correct or not, and why.`;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    });

    return response.choices[0].message.content;
  } catch (error) {
    logger.error('AI answer explanation error:', error);
    throw new Error('Failed to explain answer');
  }
};

module.exports = {
  generateQuiz,
  explainAnswer,
};