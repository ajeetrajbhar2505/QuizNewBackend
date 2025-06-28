class SocketClient {
    constructor() {
      this.socket = io(process.env.SOCKET_SERVER_URL || 'http://localhost:3000', {
        auth: {
          token: localStorage.getItem('token'),
        },
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
      });
  
      this.setupEventListeners();
    }
  
    setupEventListeners() {
      this.socket.on('connect', () => {
        console.log('Connected to socket server');
      });
  
      this.socket.on('disconnect', () => {
        console.log('Disconnected from socket server');
      });
  
      this.socket.on('connect_error', (err) => {
        console.error('Socket connection error:', err);
      });
  
      this.socket.on('error', (err) => {
        console.error('Socket error:', err);
      });
  
      // Authentication events
      this.socket.on('auth:login:success', this.handleLoginSuccess.bind(this));
      this.socket.on('auth:login:error', this.handleLoginError.bind(this));
      this.socket.on('auth:register:success', this.handleRegisterSuccess.bind(this));
      this.socket.on('auth:register:error', this.handleRegisterError.bind(this));
  
      // Notification events
      this.socket.on('notification:new', this.handleNewNotification.bind(this));
    }
  
    // Authentication methods
    login(email, password) {
      this.socket.emit('auth:login', { email, password });
    }
  
    register(name, email, password) {
      this.socket.emit('auth:register', { name, email, password });
    }
  
    logout() {
      this.socket.emit('auth:logout');
      localStorage.removeItem('token');
    }
  
    // Quiz methods
    createQuiz(quizData) {
      this.socket.emit('quiz:create', quizData);
    }
  
    startQuiz(quizId) {
      this.socket.emit('quiz:start', quizId);
    }
  
    submitAnswer(quizId, questionId, answer) {
      this.socket.emit('quiz:answer:submit', { quizId, questionId, answer });
    }
  
    // Event handlers
    handleLoginSuccess(data) {
      localStorage.setItem('token', data.token);
      console.log('Login successful', data.user);
      // Update UI or redirect
    }
  
    handleLoginError(data) {
      console.error('Login failed:', data.error);
      // Show error to user
    }
  
    handleRegisterSuccess(data) {
      localStorage.setItem('token', data.token);
      console.log('Registration successful', data.user);
      // Update UI or redirect
    }
  
    handleRegisterError(data) {
      console.error('Registration failed:', data.error);
      // Show error to user
    }
  
    handleNewNotification(data) {
      console.log('New notification:', data.notification);
      // Display notification to user
    }
  }
  
  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    window.socketClient = new SocketClient();
  });