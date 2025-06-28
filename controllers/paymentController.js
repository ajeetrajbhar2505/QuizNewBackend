const paymentService = require('../services/paymentService');
const logger = require('../config/logger');

const createPaymentIntent = async (socket, amount) => {
  try {
    const paymentIntent = await paymentService.createPaymentIntent(
      socket.user.id,
      amount
    );
    socket.emit('payment:intent:success', { paymentIntent });
    logger.info(`Payment intent created for user ${socket.user.id}`);
  } catch (error) {
    socket.emit('payment:intent:error', { error: error.message });
    logger.error(`Payment intent error: ${error.message}`);
  }
};

const confirmPayment = async (socket, paymentId) => {
  try {
    const payment = await paymentService.confirmPayment(
      socket.user.id,
      paymentId
    );
    socket.emit('payment:confirm:success', { payment });
    logger.info(`Payment confirmed for user ${socket.user.id}`);
  } catch (error) {
    socket.emit('payment:confirm:error', { error: error.message });
    logger.error(`Payment confirmation error: ${error.message}`);
  }
};

module.exports = {
  createPaymentIntent,
  confirmPayment,
};