const express = require('express');
const multer = require('multer');

const app = express();

// Set up multer to handle file uploads
const upload = multer();

// Define the /api/ingredient-check endpoint
app.post('/api/ingredient-check', upload.single('file'), (req, res) => {
  // Handle the file upload
  const file = req.file;
  console.log(file);

  // Send a response
  res.send('File uploaded!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});
