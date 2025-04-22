const express = require('express');
const app = express();
const port = 3000;

// Home route to get client IP
app.get('/', (req, res) => {
  // This handles proxies like Heroku or AWS ELB
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const clientIp = (req.headers['x-forwarded-for'] || req.socket.remoteAddress).split(',')[0].trim();
  res.send(`Your IP address is: ${ip}<br> --    Original client’s IP    --    Cloudflare or another CDN IP    --    Internal IP from your network/load balancer    --<br> Client IP address is: ${clientIp}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});