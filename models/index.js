const mongoose = require('mongoose');
const config = require('../config/database');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = config.url;

db.User = require('./User');
db.Quiz = require('./Quiz');
db.Badge = require('./Badge');
db.Notification = require('./Notification');
db.Transaction = require('./Transaction');
db.UserStats = require('./UserStats');
db.ApiLog = require('./ApiLog');
db.ErrorLog = require('./ErrorLog');
db.ActiveQuiz = require('./ActiveQuiz');

module.exports = db;