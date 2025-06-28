const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const axios = require('axios');
const logger = require('./logger');

const JWT_SECRET = process.env.JWT_SECRET;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID;
const FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET;

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: '1d' }
  );
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    logger.error('JWT Verification Error:', err);
    return null;
  }
};

const verifyGoogleToken = async (token) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID,
    });
    return ticket.getPayload();
  } catch (error) {
    logger.error('Google token verification error:', error);
    throw new Error('Invalid Google token');
  }
};

const verifyFacebookToken = async (accessToken) => {
  try {
    const { data } = await axios.get(
      `https://graph.facebook.com/v12.0/debug_token?input_token=${accessToken}&access_token=${FACEBOOK_APP_ID}|${FACEBOOK_APP_SECRET}`
    );
    
    if (!data.data.is_valid || data.data.app_id !== FACEBOOK_APP_ID) {
      throw new Error('Invalid Facebook token');
    }

    const profile = await axios.get(
      `https://graph.facebook.com/v12.0/me?fields=id,name,email,picture&access_token=${accessToken}`
    );

    return profile.data;
  } catch (error) {
    logger.error('Facebook token verification error:', error);
    throw new Error('Invalid Facebook token');
  }
};

module.exports = {
  generateToken,
  verifyToken,
  verifyGoogleToken,
  verifyFacebookToken,
};