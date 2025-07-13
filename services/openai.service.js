const { model } = require('../config/openai.config');
const QUESTION_CACHE = new Map();
const Quiz = require('../models/Quiz');

class AIService {
  /**
   * Generates a quiz from a user prompt (returns raw Gemini response)
   * @param {string} userPrompt - The user's quiz request 
   * @param {object} options - Generation options
   * @returns {Promise<object>} Raw Gemini response with quiz data
   */
  static async generateQuiz(userPrompt, options = {}) {
    try {
      // 1. Validate and parse input
      if (!userPrompt || typeof userPrompt !== 'string') {
        throw new Error('Prompt must be a non-empty string');
      }

      await this._checkContentSafety(userPrompt);

      // 2. Extract requirements from prompt
      const { topic, questionCount, difficulty } = await this._parseUserPrompt(userPrompt, options);

      // 3. Generate metadata in parallel
      const [category, description] = await Promise.all([
        this._determineCategoryWithAI(topic),
        this._generateQuizDescription(topic, difficulty, questionCount)
      ]);

      // 4. Generate questions with timing
      const { questions, totalTime } = await this._generateQuestionsWithTiming(
        topic,
        questionCount,
        difficulty
      );

      // 5. Return raw Gemini response format
      return {
        title: this._generateQuizTitle(topic, difficulty),
        topic,
        description,
        category,
        difficulty,
        totalQuestions: questionCount,
        estimatedTime: totalTime,
        source: 'gemini',
        createdAt: new Date().toISOString(),
        questions: questions.map(q => ({
          id: this._generateQuestionId(q.questionText),
          questionText: q.questionText,
          options: q.options,
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          points: q.points || 10,
          timeLimit: this._calculateTimePerQuestion(difficulty)
        }))
      };

    } catch (error) {
      console.error('Quiz generation failed:', error);
      throw new Error(`Quiz generation failed: ${error.message}`);
    }
  }

  /* PRIVATE HELPER METHODS */

  /**
   * Parses user prompt into structured data
   */
 static async _parseUserPrompt(userPrompt, options = {}) {
    const promptString = String(userPrompt || '').trim();

    const defaults = {
      questionCount: Math.min(Math.max(parseInt(options.questionCount) || 5, 1), 20),
      difficulty: ['easy', 'medium', 'hard'].includes(options.difficulty)
        ? options.difficulty
        : 'medium',
      topic: 'general knowledge'
    };

    const parsed = { ...defaults };

    if (!promptString) return parsed;

    // Enhanced natural language parsing
    const countMatch = promptString.match(/(?:generate|create|make)\s*(\d+)\s*(?:questions|items|q)/i)
      || promptString.match(/(\d+)\s*questions?/i);
    if (countMatch) parsed.questionCount = Math.min(parseInt(countMatch[1]), 20);

    const difficultyMatch = promptString.match(/\b(easy|medium|hard|beginner|intermediate|advanced)\b/i);
    if (difficultyMatch) {
      const level = difficultyMatch[1].toLowerCase();
      parsed.difficulty =
        level === 'beginner' ? 'easy' :
          level === 'intermediate' ? 'medium' :
            level === 'advanced' ? 'hard' : level;
    }

    const refinementPrompt = `
      Transform this into a proper quiz title following these rules:
      1. 3-8 words maximum
      2. Title case formatting
      3. Clear and specific to the topic
      4. Remove any questions marks or informal language
      5. Make it engaging for learners
      6. Clear total count related words
      Input: "${userPrompt}"
      Proper Quiz Title: 
    `;

    const result = await model.generateContent(refinementPrompt);
    const response = await result.response;
    const topic = response.text();
    parsed.topic = topic || defaults.topic
    return parsed;
  }

  /**
   * Generates questions with calculated timing
   */
  static async _generateQuestionsWithTiming(topic, count, difficulty) {
    const questions = [];
    let totalTime = 0;
    const timePerQuestion = this._calculateTimePerQuestion(difficulty);

    for (let i = 0; i < count; i++) {
      try {
        if (i > 0) await this._delay(1000); // Rate limiting

        const question = await this._generateSingleQuestion(
          i + 1,
          difficulty,
          topic
        );

        questions.push(question);
        totalTime += timePerQuestion;
      } catch (error) {
        console.error(`Question ${i + 1} failed:`, error.message);
        questions.push(this._createFallbackQuestion(i + 1, topic));
        totalTime += timePerQuestion;
      }
    }

    return { questions, totalTime };
  }

  /**
   * Generates a unique ID for each question
   */
  static _generateQuestionId(questionText) {
    return require('crypto')
      .createHash('md5')
      .update(questionText)
      .digest('hex')
      .substring(0, 8);
  }

  /**
   * Calculates time per question based on difficulty
   */
  static _calculateTimePerQuestion(difficulty) {
    const timing = { easy: 30, medium: 45, hard: 60 };
    return timing[difficulty] || 45;
  }

  /**
   * Generates an engaging quiz description
   */
  static async _generateQuizDescription(topic, difficulty, questionCount) {
    const prompt = `Generate a concise 1-2 sentence description for a ${difficulty} quiz about ${topic} with ${questionCount} questions. Make it engaging.`;
    const result = await model.generateContent(prompt);
    return (await result.response).text().trim();
  }

  /**
   * Generates a properly formatted quiz title
   */
  static _generateQuizTitle(topic, difficulty) {
    return topic + ' - ' + difficulty
  }

  /**
   * Checks prompt for inappropriate content
   */
  static async _checkContentSafety(prompt) {
    const result = await model.generateContent(`Analyze this prompt: "${prompt} as one of: Programming, Science, History, Geography, Sports, Entertainment, Art, Mathematics, or General. Respond with exactly one word.". Respond ONLY with "SAFE" or "UNSAFE".`);
    const response = (await result.response).text().trim();
    if (response !== "SAFE") throw new Error("Content violates guidelines");
  }

  /**
   * Determines the most relevant category
   */
  static async _determineCategoryWithAI(topic) {
    const result = await model.generateContent(
      `Categorize "${topic}" as one of: Programming, Science, History, Geography, Sports, Entertainment, Art, Mathematics, or General. Respond with exactly one word.`
    );
    const category = (await result.response).text().trim();
    return ['Programming', 'Science', 'History', 'Geography', 'Sports', 'Entertainment', 'Art', 'Mathematics'].includes(category)
      ? category
      : 'General';
  }

  /**
   * Generates a single quiz question
   */
  static async _generateSingleQuestion(index, difficulty, topic) {
    const cacheKey = `${topic}-${difficulty}-${index}`;
    if (QUESTION_CACHE.has(cacheKey)) return QUESTION_CACHE.get(cacheKey);

    const prompt = `Generate a ${difficulty} difficulty quiz question about ${topic} with these requirements:
    - Clear and concise question text
    - 4 distinct options labeled a, b, c, d
    - One correct answer (specify the letter)
    - Brief explanation (20-30 words)
    Format as valid JSON like this example:
    {
      "questionText": "What is the capital of France?",
      "options": { "a": "London", "b": "Berlin", "c": "Paris", "d": "Madrid" },
      "correctAnswer": "c",
      "explanation": "Paris has been France's capital since 508 AD."
    }`;

    try {
      const result = await model.generateContent(prompt);
      const text = (await result.response).text();
      const jsonText = text.replace(/```json|```/g, '').trim();
      const question = JSON.parse(jsonText);

      // Validate question structure
      if (!question.questionText || !question.options || !question.correctAnswer) {
        throw new Error('Invalid question format from AI');
      }

      QUESTION_CACHE.set(cacheKey, { ...question, points: 10 });
      return { ...question, points: 10 };
    } catch (error) {
      console.error('Question generation failed:', error);
      return this._createFallbackQuestion(index, topic);
    }
  }

  /**
   * Creates a fallback question if generation fails
   */
  static _createFallbackQuestion(index, topic) {
    return {
      questionText: `What is an important aspect of ${topic}? (Question ${index})`,
      options: {
        a: "Option A",
        b: "Option B",
        c: "Option C",
        d: "Option D"
      },
      correctAnswer: "b",
      explanation: "This is a placeholder question.",
      points: 10
    };
  }

  /**
   * Adds delay between API calls
   */
  static _delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  static async refreshQuestion(quizId, userId, questionIndex) {
    try {
      // 1. Get the original quiz to maintain context
      const quiz = await Quiz.findById(quizId).lean();
      if (!quiz) {
        throw new Error('Quiz not found');
      }

      // 2. Generate a new question matching the original parameters
      const prompt = this._buildRefreshPrompt(
        quiz.topic,
        quiz.difficulty,
        quiz.questions[questionIndex]
      );

      // 3. Get new question from AI
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      // 4. Parse and validate the response
      const newQuestion = this._parseQuestionResponse(text);

      // 5. Transform to database format
      const transformedQuestion = {
        question: newQuestion.questionText,
        options: [
          newQuestion.options.a,
          newQuestion.options.b,
          newQuestion.options.c,
          newQuestion.options.d
        ],
        correctAnswer: newQuestion.options[newQuestion.correctAnswer],
        explanation: newQuestion.explanation,
        points: newQuestion.points || 10,
        timeLimit: this._calculateTimePerQuestion(quiz.difficulty),
        createdAt: new Date(),
        createdBy: userId
      };

      return transformedQuestion;

    } catch (error) {
      console.error('Error refreshing question:', error);
      throw new Error('Failed to generate new question');
    }
  }


  static _buildRefreshPrompt(topic, difficulty, originalQuestion) {
    return `Generate a new ${difficulty} difficulty quiz question about ${topic} to replace this existing question:
    
    Original Question: "${originalQuestion.question}"
    
    Requirements:
    - Same difficulty level (${difficulty})
    - Same topic (${topic})
    - Different question text
    - 4 distinct options (a, b, c, d)
    - Clear correct answer
    - Brief explanation (20-30 words)
    
    Format response as JSON:
    {
      "questionText": "...",
      "options": { "a": "...", "b": "...", "c": "...", "d": "..." },
      "correctAnswer": "a/b/c/d",
      "explanation": "..."
    }`;
  }

  static _parseQuestionResponse(text) {
    try {
      const cleaned = text.replace(/```json|```/g, '').trim();
      const question = JSON.parse(cleaned);
      if (!question.questionText || !question.options || !question.correctAnswer) {
        throw new Error('Invalid question format from AI');
      }

      return question;
    } catch (error) {
      console.error('Failed to parse question:', error);
      throw new Error('Invalid question format received from AI');
    }
  }

}

module.exports = AIService;