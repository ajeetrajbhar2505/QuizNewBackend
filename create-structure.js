const fs = require('fs');
const path = require('path');

const structure = {
  'quiz-app': {
    'config': ['database.js', 'auth.js', 'logger.js', 'socket.js'],
    'controllers': [
      'authController.js',
      'quizController.js',
      'userController.js',
      'paymentController.js',
      'leaderboardController.js',
      'aiQuizController.js',
      'notificationController.js',
      'profileController.js',
      'dashboardController.js'
    ],
    'models': [
      'User.js',
      'Quiz.js',
      'Badge.js',
      'Notification.js',
      'Transaction.js',
      'UserStats.js',
      'ApiLog.js',
      'ErrorLog.js',
      'ActiveQuiz.js',
      'index.js'
    ],
    'middlewares': ['loggerMiddleware.js', 'errorHandler.js', 'socketAuth.js'],
    'routes': [
      'authRoutes.js',
      'quizRoutes.js',
      'userRoutes.js',
      'paymentRoutes.js',
      'aiQuizRoutes.js',
      'notificationRoutes.js',
      'dashboardRoutes.js'
    ],
    'services': [
      'authService.js',
      'quizService.js',
      'paymentService.js',
      'emailService.js',
      'aiService.js',
      'notificationService.js',
      'loggingService.js',
      'socketService.js',
      'dashboardService.js'
    ],
    'utils': ['helpers.js', 'validators.js', 'errorTypes.js', 'realtime.js'],
    'public': {
      'js': ['socket-client.js']
    },
    'views': ['index.html'],
    'app.js': '',
    'package.json': ''
  }
};

function createStructure(base, structure) {
  Object.keys(structure).forEach(item => {
    const itemPath = path.join(base, item);
    if (Array.isArray(structure[item])) {
      // It's a directory with files
      fs.mkdirSync(itemPath, { recursive: true });
      structure[item].forEach(file => {
        fs.writeFileSync(path.join(itemPath, file), '');
      });
    } else if (typeof structure[item] === 'object') {
      // It's a subdirectory
      createStructure(itemPath, structure[item]);
    } else {
      // It's a file
      fs.writeFileSync(itemPath, '');
    }
  });
}

createStructure('.', structure);
console.log('Directory structure created successfully!');