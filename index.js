const express = require('express');
const app = express();
const port = 3000;

// Home route to get client IP
app.get('/', (req, res) => {
  // This handles proxies like Heroku or AWS ELB
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  res.send(`Your IP address is: ${ip}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});