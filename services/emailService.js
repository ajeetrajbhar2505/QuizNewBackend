const nodemailer = require('nodemailer');
const logger = require('../config/logger');

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmail = async (to, subject, text, html) => {
  try {
    await transporter.sendMail({
      from: `"Quiz App" <${process.env.EMAIL_NOREPLY}>`,
      to,
      subject,
      text,
      html,
    });
    logger.info(`Email sent to ${to}`);
    return true;
  } catch (error) {
    logger.error(`Email sending error: ${error.message}`);
    throw error;
  }
};

const sendWelcomeEmail = async (user) => {
  const subject = 'Welcome to Quiz App!';
  const text = `Hi ${user.name},\n\nWelcome to Quiz App! We're excited to have you on board.\n\nStart quizzing now!`;
  const html = `<p>Hi ${user.name},</p><p>Welcome to Quiz App! We're excited to have you on board.</p><p>Start quizzing now!</p>`;

  return sendEmail(user.email, subject, text, html);
};

module.exports = {
  sendEmail,
  sendWelcomeEmail,
};