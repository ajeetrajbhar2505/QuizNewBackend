const setupAuthRoutes = (socket) => {
  // Error handling middleware    
    socket.on('error', (error) => {
    console.error('Socket error:', error);
    socket.emit('auth:error', { 
      message: error.message || 'Authentication error occurred' 
    });
  });
};

module.exports = setupAuthRoutes;