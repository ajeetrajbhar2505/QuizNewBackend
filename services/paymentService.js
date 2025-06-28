const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Transaction = require('../models/Transaction');
const logger = require('../config/logger');

const createPaymentIntent = async (userId, amount) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100, // convert to cents
    currency: 'usd',
    metadata: { userId: userId.toString() },
  });

  await Transaction.create({
    user: userId,
    amount,
    paymentIntentId: paymentIntent.id,
    status: 'pending',
  });

  return {
    clientSecret: paymentIntent.client_secret,
    paymentIntentId: paymentIntent.id,
  };
};

const confirmPayment = async (userId, paymentIntentId) => {
  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

  if (paymentIntent.metadata.userId !== userId.toString()) {
    throw new Error('Payment intent does not belong to user');
  }

  const transaction = await Transaction.findOneAndUpdate(
    { paymentIntentId, user: userId },
    { status: paymentIntent.status },
    { new: true }
  );

  if (!transaction) {
    throw new Error('Transaction not found');
  }

  return transaction;
};

module.exports = {
  createPaymentIntent,
  confirmPayment,
};