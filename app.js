// require('dotenv').config();
// const express = require('express');
// const http = require('http');
// const connectDB = require('./config/database');
// const { initSocket } = require('./config/socket');
// const logger = require('./config/logger');

// // Import route setup functions
// const setupAuthRoutes = require('./routes/authRoutes');
// const setupQuizRoutes = require('./routes/quizRoutes');
// const setupUserRoutes = require('./routes/userRoutes');
// const setupPaymentRoutes = require('./routes/paymentRoutes');
// const setupNotificationRoutes = require('./routes/notificationRoutes');
// const setupDashboardRoutes = require('./routes/dashboardRoutes');
// const oauthRoutes = require('./routes/oauthRoutes');
// // Initialize Express app
// const app = express();
// const server = http.createServer(app);
// const cors = require('cors')
// app.use(cors());
// // Connect to database
// connectDB();

// // Middleware
// app.use(express.json());
// app.use(express.static('public'));
// app.use(oauthRoutes);

// // Initialize Socket.io
// const io = initSocket(server);

// // Socket.io connection handling
// io.on('connection', (socket) => {
//   logger.info(`Client connected: ${socket.id}`);

//   // Setup all routes
//   setupAuthRoutes(socket);
//   setupQuizRoutes(socket);
//   setupUserRoutes(socket);
//   setupPaymentRoutes(socket);
//   setupNotificationRoutes(socket);
//   setupDashboardRoutes(socket);

//   socket.on('disconnect', () => {
//     logger.info(`Client disconnected: ${socket.id}`);
//   });
// });

// // Start server
// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   logger.info(`Server running on port ${PORT}`);
// });

// server.js
const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] }
});

const rooms = new Map();

io.on('connection', (socket) => {
  console.log('Connected:', socket.id);

  // CREATE ROOM
  socket.on('create-room', ({ teacherName, subject }, callback) => {
    const roomId = generateRoomId();

    rooms.set(roomId, {
      teacherId: socket.id,
      teacherName,
      subject,
      students: [],
      createdAt: new Date(),
      isRecording: false
    });

    socket.join(roomId);
    socket.roomId = roomId;

    callback({ success: true, roomId });
  });

  // JOIN ROOM
  socket.on('join-room', ({ roomId, studentName }, callback) => {
    const room = rooms.get(roomId);
    if (!room) return callback({ success: false, message: 'Room not found' });

    socket.join(roomId);
    socket.roomId = roomId;

    const student = { id: socket.id, name: studentName };
    room.students.push(student);

    const roomInfo = {
      roomId,
      teacherName: room.teacherName,
      subject: room.subject,
      studentCount: room.students.length,
      isRecording: room.isRecording,
      startedAt: room.createdAt
    };

    callback({ success: true, roomInfo });

    io.to(socket.id).emit('room-info', roomInfo);
    io.to(room.teacherId).emit('student-joined', student);
  });

  // SIGNALING
  socket.on('offer', ({ targetId, sdp }) => {
    io.to(targetId).emit('offer', { from: socket.id, sdp });
  });

  socket.on('answer', ({ targetId, sdp }) => {
    io.to(targetId).emit('answer', { from: socket.id, sdp });
  });

socket.on('ice-candidate', ({ targetId, candidate }) => {
  io.to(targetId).emit('ice-candidate', { from: socket.id, candidate });
});

  // CHAT (ROOM BASED)
  socket.on('send-message', (message) => {
    io.to(socket.roomId).emit('new-message', message);
  });

  // HAND RAISE
  socket.on('raise-hand', (data) => {
    io.to(socket.roomId).emit('hand-raised', data);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected:', socket.id);

    rooms.forEach((room, roomId) => {
      if (room.teacherId === socket.id) {
        rooms.delete(roomId);
      } else {
        room.students = room.students.filter(s => s.id !== socket.id);
      }
    });
  });
});

function generateRoomId() {
  return Math.random().toString(36).substring(2, 8);
}

server.listen(3000, () => {
  console.log('Server running on 3000');
});
