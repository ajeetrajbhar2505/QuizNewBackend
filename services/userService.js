const User = require('../models/User');
const logger = require('../config/logger');

const getUserProfile = async (userId) => {
  try {
    return await User.findById(userId)
      .select('-password')
      .populate('friends', 'name avatar')
      .populate('badges', 'name image');
  } catch (error) {
    logger.error(`Failed to get user profile: ${error.message}`);
    throw error;
  }
};

const updateProfile = async (userId, data) => {
  try {
    return await User.findByIdAndUpdate(
      userId,
      { $set: data },
      { new: true, runValidators: true }
    ).select('-password');
  } catch (error) {
    logger.error(`Failed to update profile: ${error.message}`);
    throw error;
  }
};

const getFriends = async (userId) => {
  try {
    const user = await User.findById(userId).populate('friends', 'name avatar email');
    return user.friends;
  } catch (error) {
    logger.error(`Failed to get friends: ${error.message}`);
    throw error;
  }
};

const addFriend = async (userId, friendId) => {
  try {
    const friend = await User.findById(friendId);
    if (!friend) throw new Error('User not found');
    
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { friends: friendId } },
      { new: true }
    ).select('-password');
    
    return updatedUser;
  } catch (error) {
    logger.error(`Failed to add friend: ${error.message}`);
    throw error;
  }
};

module.exports = {
  getUserProfile,
  updateProfile,
  getFriends,
  addFriend
};