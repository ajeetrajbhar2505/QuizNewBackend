const ApiLog = require('../models/ApiLog');
const ErrorLog = require('../models/ErrorLog');
const logger = require('../config/logger');

const logApiRequest = async (data) => {
  try {
    await ApiLog.create(data);
  } catch (err) {
    logger.error('Failed to log API request:', err);
  }
};

const logError = async (errorData) => {
  try {
    await ErrorLog.create(errorData);
  } catch (err) {
    logger.error('Failed to log error:', err);
  }
};

const getRecentLogs = async (limit = 50) => {
  return await ApiLog.find().sort({ createdAt: -1 }).limit(limit);
};

const getErrorLogs = async (limit = 50) => {
  return await ErrorLog.find().sort({ createdAt: -1 }).limit(limit);
};

module.exports = {
  logApiRequest,
  logError,
  getRecentLogs,
  getErrorLogs,
};