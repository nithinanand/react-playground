const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 5000;

app.use(cors());
// Middleware to handle JSON requests
app.use(express.json());

// Load JSON file synchronously
const dataPath = path.join(__dirname, 'productsData.json');
const jsonData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Simple GET route to return data from the JSON file
app.get('/api/products', (req, res) => {
  res.json(jsonData.laptopData);  // Sending users from the JSON file
});

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
