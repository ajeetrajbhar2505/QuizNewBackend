require('dotenv').config();
const express = require('express');
const http = require('http');
const connectDB = require('./config/database');
const { initSocket, getIO } = require('./config/socket');
const logger = require('./config/logger');
const cors = require('cors');

// Initialize Express app
const app = express();
const server = http.createServer(app);

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
const oauthRoutes = require('./routes/oauthRoutes');
app.use(oauthRoutes);

// Initialize Socket.io with namespaces
const io = initSocket(server);

// Get namespaces
const publicNamespace = io.of('/public');
const privateNamespace = io.of('/private');

// Public namespace routes (unauthenticated)
publicNamespace.on('connection', (socket) => {
  logger.info(`New public client connected: ${socket.id}`);

  // Setup auth routes
  require('./routes/authRoutes')(socket);

  socket.on('disconnect', () => {
    logger.info(`Public client disconnected: ${socket.id}`);
  });
});

// Private namespace routes (authenticated)
privateNamespace.use(require('./middlewares/socketAuth').authenticate);
privateNamespace.on('connection', (socket) => {
  logger.info(`New private client connected: ${socket.id} (User ID: ${socket.user?.id || 'unknown'})`);

  // Setup authenticated routes
  require('./routes/quizRoutes')(socket);
  require('./routes/userRoutes')(socket);
  require('./routes/paymentRoutes')(socket);
  require('./routes/notificationRoutes')(socket);
  require('./routes/dashboardRoutes')(socket);

  socket.on('disconnect', () => {
    logger.info(`Private client disconnected: ${socket.id}`);
  });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});