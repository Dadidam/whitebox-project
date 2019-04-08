const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// include product API routes rules
require('./routes/productRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // serve up production assests (main.js, main.css, etc.)
  app.use(express.static('client/build'));

  // serve up the index.html file
  // if Express doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// PORT from environment for production deployment
// For development we use 4987 port number
const PORT = process.env.PORT || 4987;
app.listen(PORT);
