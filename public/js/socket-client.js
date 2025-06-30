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
    }, { scope: 'public_profile,email' });
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
  setupEventListeners() {// Auth events
    this.socket
      .on('auth:register:success', this.handleRegisterSuccess.bind(this))
      .on('auth:register:error', this.handleRegisterError.bind(this))

      .on('auth:login:success', this.handleLoginSuccess.bind(this))
      .on('auth:login:error', this.handleLoginError.bind(this))

      .on('auth:logout:success', this.handleLogoutSuccess.bind(this))
      .on('auth:logout:error', this.handleLogoutError.bind(this))

      .on('auth:google:url', this.handleGoogleAuthUrl.bind(this))
      .on('auth:google:success', this.handleGoogleLoginSuccess.bind(this))
      .on('auth:google:error', this.handleGoogleLoginError.bind(this))

      .on('auth:facebook:url', this.handleFacebookAuthUrl.bind(this))
      .on('auth:facebook:success', this.handleFacebookLoginSuccess.bind(this))
      .on('auth:facebook:error', this.handleFacebookLoginError.bind(this))

      .on('auth:otp:send:success', this.handleOtpSendSuccess.bind(this))
      .on('auth:otp:send:error', this.handleOtpSendError.bind(this))

      .on('auth:otp:verify:success', this.handleOtpVerifySuccess.bind(this))
      .on('auth:otp:verify:error', this.handleOtpVerifyError.bind(this))

      .on('auth:me:success', this.handleCurrentUserSuccess.bind(this))
      .on('auth:me:error', this.handleCurrentUserError.bind(this))

      .on('receiveLogin', this.handleReceiveLogin.bind(this));
    this.socket.on('connect', () => {
      console.log('Connected to socket server');
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from socket server');
    });


  }
}