class AppError extends Error {
    constructor(message, code = 'INTERNAL_ERROR', status = 500, data = {}) {
      super(message);
      this.code = code;
      this.status = status;
      this.data = data;
      this.isOperational = true;
    }
  }
  
  class ValidationError extends AppError {
    constructor(message, data = {}) {
      super(message, 'VALIDATION_ERROR', 400, data);
    }
  }
  
  class AuthenticationError extends AppError {
    constructor(message) {
      super(message, 'AUTHENTICATION_ERROR', 401);
    }
  }
  
  class ForbiddenError extends AppError {
    constructor(message) {
      super(message, 'FORBIDDEN_ERROR', 403);
    }
  }
  
  class NotFoundError extends AppError {
    constructor(message) {
      super(message, 'NOT_FOUND_ERROR', 404);
    }
  }
  
  module.exports = {
    AppError,
    ValidationError,
    AuthenticationError,
    ForbiddenError,
    NotFoundError,
  };