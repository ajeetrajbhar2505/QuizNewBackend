require('dotenv').config();
const express = require('express');
const http = require('http');
const connectDB = require('./config/database');
const { initSocket } = require('./config/socket');
const logger = require('./config/logger');

// Import route setup functions
const setupAuthRoutes = require('./routes/authRoutes');
const setupQuizRoutes = require('./routes/quizRoutes');
const setupUserRoutes = require('./routes/userRoutes');
const setupPaymentRoutes = require('./routes/paymentRoutes');
const setupNotificationRoutes = require('./routes/notificationRoutes');
const setupDashboardRoutes = require('./routes/dashboardRoutes');
const oauthRoutes = require('./routes/oauthRoutes');
// Initialize Express app
const app = express();
const server = http.createServer(app);

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(express.static('public'));
app.use(oauthRoutes);

// Initialize Socket.io
const io = initSocket(server);

// Socket.io connection handling
io.on('connection', (socket) => {
  logger.info(`Client connected: ${socket.id}`);

  // Setup all routes
  setupAuthRoutes(socket);
  setupQuizRoutes(socket);
  setupUserRoutes(socket);
  setupPaymentRoutes(socket);
  setupNotificationRoutes(socket);
  setupDashboardRoutes(socket);

  socket.on('disconnect', () => {
    logger.info(`Client disconnected: ${socket.id}`);
  });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
