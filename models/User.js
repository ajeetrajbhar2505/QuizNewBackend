const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true, sparse: true },
  password: { type: String },
  googleId: { type: String, unique: true, sparse: true },
  facebookId: { type: String, unique: true, sparse: true },
  avatar: { type: String },
  isVerified: { type: Boolean, default: false },
  isLoggedIn: { type: Boolean, default: false },           // Current login status
  lastLoginAt: { type: Date },                             // Last login timestamp
  activeSessions: { type: Number, default: 0 },            // Track concurrent logins
  loginHistory: [{                                         // Track login attempts
    timestamp: { type: Date, default: Date.now },
    ipAddress: String,
    userAgent: String
  }],
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  badges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Badge' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, {
  toJSON: {
    transform: function (doc, ret) {
      delete ret.password;                 // Always remove password in responses
      delete ret.googleId;                 // Remove sensitive IDs
      delete ret.facebookId;
    }
  }
});

// Password hashing middleware
userSchema.pre('save', async function (next) {
  if (!this.isModified('password') || !this.password) return next();

  try {
    this.password = await bcrypt.hash(this.password, 12);
    this.updatedAt = Date.now();
    next();
  } catch (err) {
    next(err);
  }
});

// Password comparison method
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Login status management methods
userSchema.methods.markAsLoggedIn = function (sessionInfo = {}) {
  this.isLoggedIn = true;
  this.lastLoginAt = new Date();
  this.activeSessions += 1;
  this.loginHistory.push({
    timestamp: new Date(),
    ipAddress: sessionInfo.ipAddress,
    userAgent: sessionInfo.userAgent
  });
  // Keep only last 10 login records
  if (this.loginHistory.length > 10) this.loginHistory.shift();
};

userSchema.methods.markAsLoggedOut = function () {
  this.activeSessions = Math.max(0, this.activeSessions - 1);
  this.isLoggedIn = this.activeSessions > 0;
};

// Static method for finding by email or social IDs
userSchema.statics.findByCredentials = async function ({ email, googleId, facebookId }) {
  return this.findOne({
    $or: [
      { email },
      ...(googleId ? [{ googleId }] : []),
      ...(facebookId ? [{ facebookId }] : [])
    ]
  });
};

module.exports = mongoose.model('User', userSchema);