const logger = require('../config/logger');

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePassword = (password) => {
  return password.length >= 6;
};

const handleSocketError = (socket, error, eventPrefix) => {
  logger.error(`${eventPrefix} error:`, error);
  socket.emit(`${eventPrefix}:error`, { error: error.message });
};

const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

module.exports = {
  validateEmail,
  validatePassword,
  handleSocketError,
  sanitizeInput,
};