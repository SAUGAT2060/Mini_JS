const express = require('express'); // Import Express framework
const path = require('path');       // Import path module for handling file paths
const data = require('./data/Info.json'); // Load JSON data

const app = express();
const port = 3000;

// API route to return JSON data
app.get('/data/info', (req, res) => {
  res.json(data);
  
});

// Serve static files using an absolute path (recommended for reliability)
app.use('/static', express.static(path.join(__dirname, 'public')));

console.log(__dirname); // Logs the absolute directory path

// Start the server
app.listen(port, () => {
  console.log(`URL: http://localhost:${port}`);
});
