const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    sparse: true,
    trim: true,
    lowercase: true
  },
  password: { type: String, select: false },
  googleId: { type: String, select: false },
  facebookId: { type: String, select: false },
  avatar: { type: String },
  isVerified: { type: Boolean, default: false },
  isLoggedIn: { type: Boolean, default: false },
  lastLoginAt: { type: Date },
  activeSessions: { type: Number, default: 0 },
  loginHistory: [{
    timestamp: { type: Date, default: Date.now },
    ipAddress: String,
    userAgent: String,
    loginType: { type: String, enum: ['email', 'google', 'facebook'], required: true },
    sessionId: String
  }],
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  badges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Badge' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, {
  timestamps: true,
  toJSON: { 
    virtuals: true,
    transform: function (doc, ret) {
      delete ret.password;
      delete ret.googleId;
      delete ret.facebookId;
      delete ret.__v;
      return ret;
    }
  },
  toObject: { virtuals: true }
});

// Password hashing middleware
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  
  try {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 12);
    }
    next();
  } catch (err) {
    next(err);
  }
});

// Password comparison method
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

/**
 * Marks user as logged in and records login attempt
 * @param {Object} sessionInfo - { ipAddress, userAgent, loginType, sessionId }
 */
userSchema.methods.addLoginRecord = function(sessionInfo = {}) {
  // Validate required fields
  if (!sessionInfo.loginType || !['email', 'google', 'facebook'].includes(sessionInfo.loginType)) {
    throw new Error('Invalid login type');
  }

  // Add login history record
  this.loginHistory.push({
    ipAddress: sessionInfo.ipAddress,
    userAgent: sessionInfo.userAgent,
    loginType: sessionInfo.loginType,
    sessionId: sessionInfo.sessionId || mongoose.Types.ObjectId().toString()
  });

  // Keep only last 20 login records
  if (this.loginHistory.length > 20) {
    this.loginHistory = this.loginHistory.slice(-20);
  }

  return this;
};

/**
 * Updates login status (call when session starts)
 */
userSchema.methods.startSession = function() {
  this.activeSessions += 1;
  this.isLoggedIn = true;
  this.lastLoginAt = new Date();
  return this;
};

/**
 * Updates login status (call when session ends)
 */
userSchema.methods.endSession = function() {
  this.activeSessions = Math.max(0, this.activeSessions - 1);
  this.isLoggedIn = this.activeSessions > 0;
  return this;
};

/**
 * Full login procedure
 */
userSchema.methods.login = function(sessionInfo) {
  this.addLoginRecord(sessionInfo);
  this.startSession();
  return this.save();
};

/**
 * Full logout procedure
 */
userSchema.methods.logout = function() {
  this.endSession();
  return this.save();
};

// Static method for finding by credentials
userSchema.statics.findByCredentials = async function ({ email, googleId, facebookId }) {
  const query = {
    $or: [
      { email },
      ...(googleId ? [{ googleId }] : []),
      ...(facebookId ? [{ facebookId }] : [])
    ]
  };

  return this.findOne(query).select('+password +googleId +facebookId');
};

// Add index for better performance
userSchema.index({ email: 1 });
userSchema.index({ googleId: 1 });
userSchema.index({ facebookId: 1 });

module.exports = mongoose.model('User', userSchema);