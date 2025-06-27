# QuizNewBackend/
├── config/
│   ├── database.js
│   ├── auth.js
│   ├── logger.js
│   └── socket.js         
├── controllers/
│   ├── authController.js
│   ├── quizController.js
│   ├── userController.js
│   ├── paymentController.js
│   ├── leaderboardController.js
│   ├── aiQuizController.js
│   ├── notificationController.js
│   ├── profileController.js
│   └── dashboardController.js 
├── models/
│   ├── User.js
│   ├── Quiz.js
│   ├── Badge.js
│   ├── Notification.js
│   ├── Transaction.js
│   ├── UserStats.js
│   ├── ApiLog.js
│   ├── ErrorLog.js
│   ├── ActiveQuiz.js     
│   └── index.js
├── middlewares/
│   ├── loggerMiddleware.js
│   ├── errorHandler.js
│   └── socketAuth.js     
├── routes/
│   ├── authRoutes.js
│   ├── quizRoutes.js
│   ├── userRoutes.js
│   ├── paymentRoutes.js
│   ├── aiQuizRoutes.js
│   ├── notificationRoutes.js
│   └── dashboardRoutes.js 
├── services/
│   ├── authService.js
│   ├── quizService.js
│   ├── paymentService.js
│   ├── emailService.js
│   ├── aiService.js
│   ├── notificationService.js
│   ├── loggingService.js
│   ├── socketService.js   
│   └── dashboardService.js 
├── utils/
│   ├── helpers.js
│   ├── validators.js
│   ├── errorTypes.js
│   └── realtime.js      
├── public/
│   ├── images/
│   └── js/
│       └── socket-client.js 
├── views/
├── app.js
└── package.json
