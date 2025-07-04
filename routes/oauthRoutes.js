const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const logger = require('../config/logger');
const { getIO } = require('../config/socket');

// Google OAuth callback
router.get('/auth/google/callback', async (req, res) => {
  try {
    const { code } = req.query;
    const socket = getIO();

    if (!socket) {
      return res.send(`
          <script>
            window.opener.postMessage({
              type: 'oauth-error',
              message: 'Socket connection not found'
            }, window.opener.location.origin);
        setTimeout(() => {
          window.close();
      }, 1000);
      </script>
        `);
    }

    // Forward the code to the socket handler
    console.log({ 'auth:google:callback': code });
    socket.emit('auth:google:callback', code);

    res.send(`
        <script>
        setTimeout(() => {
          window.close();
      }, 1000);
        </script>
        `);
  } catch (error) {
    logger.error(`Google callback route error: ${error.message}`);
    console.log({ 'auth:google:callback:error': error });
    res.status(500).send(`
        <script>
          window.close();
          window.opener.postMessage({
            type: 'oauth-error',
            message: '${error.message.replace(/'/g, "\\'")}'
          }, window.opener.location.origin);
        </script>
      `);
  }
});
// Facebook OAuth callback
router.get('/auth/facebook/callback', async (req, res) => {
  try {
    const { code } = req.query;
    const socket = getIO();

    if (!socket) {
      return res.send(`
              <script>
              window.close();
                window.opener.postMessage({
                  type: 'oauth-error',
                  message: 'Socket connection not found'
                }, window.opener.location.origin);
              </script>
            `);
    }

    // Forward the code to the socket handler
    socket.emit('auth:facebook:callback', code);
    console.log({ 'auth:facebook:callback': code });

    res.send(`
        <script>
        setTimeout(() => {
          window.close();
      }, 1000);
        </script>
        `);
  } catch (error) {
    logger.error(`Facebook callback route error: ${error.message}`);
    console.log({ 'auth:facebook:callback:error': error });
    res.status(500).send(`
            <script>
              window.opener.postMessage({
                type: 'oauth-error',
                message: '${error.message.replace(/'/g, "\\'")}'
              }, window.opener.location.origin);
              setTimeout(() => {
                window.close();
            }, 1000);
            </script>
          `);
  }
});

module.exports = router;