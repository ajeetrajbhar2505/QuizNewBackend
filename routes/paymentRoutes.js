const paymentController = require('../controllers/paymentController');

const setupPaymentRoutes = (socket) => {
  socket.on('payment:intent:create', (amount) => paymentController.createPaymentIntent(socket, amount));
  socket.on('payment:confirm', (paymentId) => paymentController.confirmPayment(socket, paymentId));
};

module.exports = setupPaymentRoutes;