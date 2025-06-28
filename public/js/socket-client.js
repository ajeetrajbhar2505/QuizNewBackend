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
    this.initializeAuthProviders();
  }

  initializeAuthProviders() {
    // Initialize Google
    if (typeof google !== 'undefined') {
      google.accounts.id.initialize({
        client_id: process.env.GOOGLE_CLIENT_ID,
        callback: this.handleGoogleSignIn.bind(this)
      });
    }

    // Initialize Facebook
    if (typeof FB !== 'undefined') {
      FB.init({
        appId: process.env.FACEBOOK_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v12.0'
      });
    }
  }

  handleGoogleSignIn(response) {
    this.googleLogin(response.credential);
  }

  handleFacebookSignIn() {
    FB.login((response) => {
      if (response.authResponse) {
        this.facebookLogin(response.authResponse.accessToken);
      }
    }, {scope: 'public_profile,email'});
  }

  // Authentication methods
  register(name, email, password) {
    this.socket.emit('auth:register', { name, email, password });
  }

  login(email, password) {
    this.socket.emit('auth:login', { email, password });
  }

  googleLogin(idToken) {
    this.socket.emit('auth:google', idToken);
  }

  facebookLogin(accessToken) {
    this.socket.emit('auth:facebook', accessToken);
  }

  logout() {
    this.socket.emit('auth:logout');
    localStorage.removeItem('token');
  }

  getCurrentUser() {
    this.socket.emit('auth:me');
  }

  // Event handlers
  setupEventListeners() {
    this.socket.on('connect', () => {
      console.log('Connected to socket server');
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from socket server');
    });

    // Auth events
    this.socket.on('auth:register:success', this.handleRegisterSuccess.bind(this));
    this.socket.on('auth:register:error', this.handleRegisterError.bind(this));
    this.socket.on('auth:login:success', this.handleLoginSuccess.bind(this));
    this.socket.on('auth:login:error', this.handleLoginError.bind(this));
    this.socket.on('auth:google:success', this.handleGoogleLoginSuccess.bind(this));
    this.socket.on('auth:google:error', this.handleGoogleLoginError.bind(this));
    this.socket.on('auth:facebook:success', this.handleFacebookLoginSuccess.bind(this));
    this.socket.on('auth:facebook:error', this.handleFacebookLoginError.bind(this));
    this.socket.on('auth:logout:success', this.handleLogoutSuccess.bind(this));
    this.socket.on('auth:me:success', this.handleCurrentUserSuccess.bind(this));
  }

  handleRegisterSuccess(data) {
    localStorage.setItem('token', data.token);
    console.log('Registration successful', data.user);
    // Update UI or redirect
  }

  handleLoginSuccess(data) {
    localStorage.setItem('token', data.token);
    console.log('Login successful', data.user);
    // Update UI or redirect
  }

  handleGoogleLoginSuccess(data) {
    localStorage.setItem('token', data.token);
    console.log('Google login successful', data.user);
    // Update UI or redirect
  }

  handleFacebookLoginSuccess(data) {
    localStorage.setItem('token', data.token);
    console.log('Facebook login successful', data.user);
    // Update UI or redirect
  }

  // ... other handler methods
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.socketClient = new SocketClient();
  
  // Add click handlers for auth buttons
  document.getElementById('googleSignInButton')?.addEventListener('click', () => {
    google.accounts.id.prompt();
  });
  
  document.getElementById('fb-login-button')?.addEventListener('click', () => {
    window.socketClient.handleFacebookSignIn();
  });
});