const { model } = require('../config/openai.config');
const QUESTION_CACHE = new Map();

class AIService {
  static async generateQuiz(userPrompt, options = {}) {
    // Step 1: Content safety check
    await this._checkContentSafety(userPrompt);

    // Step 2: Parse user prompt to extract topic and requirements
    const { topic, questionCount, difficulty } = this._parseUserPrompt(userPrompt, options);
    
    // Step 3: Generate questions one by one
    const questions = await this._generateQuestions(topic, questionCount, difficulty);

    return {
      title: `${difficulty} ${topic} Quiz`,
      description: `A ${difficulty} quiz with ${questionCount} questions about ${topic}`,
      questions,
      source: 'gemini'
    };
  }

  /**
   * Content safety check
   */
  static async _checkContentSafety(prompt) {
    const safetyPrompt = `Analyze this prompt for offensive or adult content: "${prompt}". 
    Respond ONLY with "SAFE" or "UNSAFE".`;

    try {
      const result = await model.generateContent(safetyPrompt);
      const response = await result.response;
      const text = response.text().trim();

      if (text === "UNSAFE") {
        throw new Error("Content violates safety guidelines");
      }
      if (text !== "SAFE") {
        throw new Error("Unable to verify content safety");
      }
    } catch (error) {
      console.error("Safety check failed:", error.message);
      throw new Error("This content cannot be processed due to safety concerns");
    }
  }

  /**
   * Parse user prompt to extract requirements
   */
  static _parseUserPrompt(userPrompt, options = {}) {
    // Ensure userPrompt is a string
    const promptString = typeof userPrompt === 'string' ? userPrompt : '';
    
    // Default values
    const defaults = {
        questionCount: 5,
        difficulty: 'medium',
        topic: 'general knowledge'
    };

    // Initialize with defaults
    let parsed = {
        topic: userPrompt || defaults.topic,
        questionCount: defaults.questionCount,
        difficulty: defaults.difficulty
    };

    // Override with options if provided
    if (typeof options.questionCount === 'number') {
        parsed.questionCount = Math.min(options.questionCount, 20); // Cap at 20 questions
    }
    if (['easy', 'medium', 'hard'].includes(options.difficulty)) {
        parsed.difficulty = options.difficulty;
    }

    // Only try to parse from prompt if it's a non-empty string
    if (promptString.trim().length > 0) {
        // Try to extract question count
        const countMatch = promptString.match(/(\d+)\s*questions?/i);
        if (countMatch) {
            parsed.questionCount = Math.min(parseInt(countMatch[1]), 20);
        }

        // Try to extract difficulty
        const difficultyMatch = promptString.match(/(easy|medium|hard)/i);
        if (difficultyMatch) {
            parsed.difficulty = difficultyMatch[1].toLowerCase();
        }

        // Extract topic - remove count and difficulty matches from the prompt
        let topic = promptString
            .replace(/(\d+)\s*questions?/i, '')
            .replace(/(easy|medium|hard)/i, '')
            .trim();

        if (topic.length > 0) {
            parsed.topic = topic;
        }
    }

    return parsed;
}

  /**
   * Generate all questions
   */
  static async _generateQuestions(topic, count, difficulty) {
    const questions = [];
    
    for (let i = 0; i < count; i++) {
      try {
        if (i > 0) await this._delay(1000); // Rate limiting
        
        const question = await this._generateSingleQuestion(
          i + 1,
          difficulty,
          topic
        );
        questions.push(question);
      } catch (error) {
        console.error(`Question ${i + 1} failed:`, error.message);
        questions.push(this._createFallbackQuestion(i + 1, topic));
      }
    }

    return questions;
  }

  /**
   * Generate a single question with improved prompt
   */
  static async _generateSingleQuestion(questionNum, difficulty, topic, retries = 3) {
    const cacheKey = `${topic}-${difficulty}-${questionNum}`;
    
    if (QUESTION_CACHE.has(cacheKey)) {
      return QUESTION_CACHE.get(cacheKey);
    }

    try {
      const prompt = this._buildQuestionPrompt(questionNum, difficulty, topic);
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      if (!text) throw new Error("No content received");

      const question = this._parseQuestionResponse(text, questionNum);
      QUESTION_CACHE.set(cacheKey, { ...question, points: 1 });
      return { ...question, points: 1 };

    } catch (error) {
      if (retries > 0) {
        await this._delay(2000);
        return this._generateSingleQuestion(questionNum, difficulty, topic, retries - 1);
      }
      throw error;
    }
  }

  /**
   * Build optimized prompt for question generation
   */
  static _buildQuestionPrompt(questionNum, difficulty, topic) {
    return `Generate quiz question ${questionNum} about ${topic} with these specifications:
    
    Difficulty: ${difficulty}
    Requirements:
    1. Question should be clear and unambiguous
    2. Provide 4 answer options (a, b, c, d)
    3. Mark the correct answer
    4. Include a brief explanation (20-30 words)
    5. Avoid trivial or overly complex questions
    6. Format the response as valid JSON
    
    Example:
    {
      "questionText": "What is the capital of France?",
      "options": {
        "a": "London",
        "b": "Berlin",
        "c": "Paris",
        "d": "Madrid"
      },
      "correctAnswer": "c",
      "explanation": "Paris has been the capital of France since the 5th century."
    }
    
    Now generate a ${difficulty} question about ${topic}:`;
  }

  /**
   * Parse the API response to extract question
   */
  static _parseQuestionResponse(text, questionNum) {
    try {
      // Clean the response and extract JSON
      const cleaned = text.replace(/```json|```/g, '').trim();
      const question = JSON.parse(cleaned);
      this._validateQuestion(question, questionNum);
      return question;
    } catch (error) {
      throw new Error(`Failed to parse question: ${error.message}`);
    }
  }

  /**
   * Enhanced question validation
   */
  static _validateQuestion(question, questionNum) {
    const errors = [];
    
    if (!question.questionText) errors.push("Missing questionText");
    if (!question.options || Object.keys(question.options).length !== 4) {
      errors.push("Need exactly 4 options (a, b, c, d)");
    }
    if (!question.correctAnswer || !['a','b','c','d'].includes(question.correctAnswer)) {
      errors.push("Invalid correctAnswer (must be a, b, c, or d)");
    }
    if (!question.explanation || question.explanation.split(' ').length < 5) {
      errors.push("Explanation too short");
    }

    if (errors.length > 0) {
      throw new Error(`Invalid question ${questionNum}: ${errors.join(', ')}`);
    }
  }

  static _delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  static _createFallbackQuestion(index, topic) {
    return {
      questionText: `What is an important aspect of ${topic}? (Fallback Q${index})`,
      options: {
        a: "Option A",
        b: "Option B",
        c: "Option C",
        d: "Option D"
      },
      correctAnswer: "b",
      explanation: "This is a placeholder question.",
      points: 1
    };
  }
}

module.exports = AIService;