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
      <!DOCTYPE html>
<html>
<head>
    <title>Thank You</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
            background: #f5f5f5;
        }
        .container {
            background: white;
            border-radius: 10px;
            padding: 30px;
            max-width: 500px;
            margin: 0 auto;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        button {
            background: #ff4444;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Thank You!</h1>
        <p>You may now safely close this tab.</p>
        <button onclick="attemptClose()">Close Tab</button>
        <p><small>(If the button doesn't work, manually close this tab.)</small></p>
    </div>

    <script>
        function attemptClose() {
            // Only works if the page was opened via window.open()
            try { window.close(); } 
            catch (e) { alert("This tab can't be closed automatically. Please close it manually."); }
        }
    </script>
</body>
</html>
        `);
    }

    // Forward the code to the socket handler
    console.log({ 'auth:google:callback': code });
    socket.emit('auth:google:callback', code);

    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Thank You</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                text-align: center;
                padding: 50px;
                background: #f5f5f5;
            }
            .container {
                background: white;
                border-radius: 10px;
                padding: 30px;
                max-width: 500px;
                margin: 0 auto;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            button {
                background: #ff4444;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Thank You!</h1>
            <p>You may now safely close this tab.</p>
            <button onclick="attemptClose()">Close Tab</button>
            <p><small>(If the button doesn't work, manually close this tab.)</small></p>
        </div>
    
        <script>
            function attemptClose() {
                // Only works if the page was opened via window.open()
                try { window.close(); } 
                catch (e) { alert("This tab can't be closed automatically. Please close it manually."); }
            }
        </script>
    </body>
    </html>
        `);
  } catch (error) {
    logger.error(`Google callback route error: ${error.message}`);
    console.log({ 'auth:google:callback:error': error });
    res.status(500).send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Thank You</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                text-align: center;
                padding: 50px;
                background: #f5f5f5;
            }
            .container {
                background: white;
                border-radius: 10px;
                padding: 30px;
                max-width: 500px;
                margin: 0 auto;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            button {
                background: #ff4444;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Thank You!</h1>
            <p>You may now safely close this tab.</p>
            <button onclick="attemptClose()">Close Tab</button>
            <p><small>(If the button doesn't work, manually close this tab.)</small></p>
        </div>
    
        <script>
            function attemptClose() {
                // Only works if the page was opened via window.open()
                try { window.close(); } 
                catch (e) { alert("This tab can't be closed automatically. Please close it manually."); }
            }
        </script>
    </body>
    </html>
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
      <!DOCTYPE html>
      <html>
      <head>
          <title>Thank You</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  text-align: center;
                  padding: 50px;
                  background: #f5f5f5;
              }
              .container {
                  background: white;
                  border-radius: 10px;
                  padding: 30px;
                  max-width: 500px;
                  margin: 0 auto;
                  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              }
              button {
                  background: #ff4444;
                  color: white;
                  border: none;
                  padding: 10px 20px;
                  border-radius: 5px;
                  cursor: pointer;
                  font-size: 16px;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <h1>Thank You!</h1>
              <p>You may now safely close this tab.</p>
              <button onclick="attemptClose()">Close Tab</button>
              <p><small>(If the button doesn't work, manually close this tab.)</small></p>
          </div>
      
          <script>
              function attemptClose() {
                  // Only works if the page was opened via window.open()
                  try { window.close(); } 
                  catch (e) { alert("This tab can't be closed automatically. Please close it manually."); }
              }
          </script>
      </body>
      </html>
            `);
    }

    // Forward the code to the socket handler
    socket.emit('auth:facebook:callback', code);
    console.log({ 'auth:facebook:callback': code });

    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Thank You</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                text-align: center;
                padding: 50px;
                background: #f5f5f5;
            }
            .container {
                background: white;
                border-radius: 10px;
                padding: 30px;
                max-width: 500px;
                margin: 0 auto;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            button {
                background: #ff4444;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Thank You!</h1>
            <p>You may now safely close this tab.</p>
            <button onclick="attemptClose()">Close Tab</button>
            <p><small>(If the button doesn't work, manually close this tab.)</small></p>
        </div>
    
        <script>
            function attemptClose() {
                // Only works if the page was opened via window.open()
                try { window.close(); } 
                catch (e) { alert("This tab can't be closed automatically. Please close it manually."); }
            }
        </script>
    </body>
    </html>
        `);
  } catch (error) {
    logger.error(`Facebook callback route error: ${error.message}`);
    console.log({ 'auth:facebook:callback:error': error });
    res.status(500).send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Thank You</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                text-align: center;
                padding: 50px;
                background: #f5f5f5;
            }
            .container {
                background: white;
                border-radius: 10px;
                padding: 30px;
                max-width: 500px;
                margin: 0 auto;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            button {
                background: #ff4444;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Thank You!</h1>
            <p>You may now safely close this tab.</p>
            <button onclick="attemptClose()">Close Tab</button>
            <p><small>(If the button doesn't work, manually close this tab.)</small></p>
        </div>
    
        <script>
            function attemptClose() {
                // Only works if the page was opened via window.open()
                try { window.close(); } 
                catch (e) { alert("This tab can't be closed automatically. Please close it manually."); }
            }
        </script>
    </body>
    </html>
          `);
  }
});

module.exports = router;