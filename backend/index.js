const express = require("express");
const multer = require("multer");
const axios = require("axios");

const app = express();

// Set up multer to handle file uploads
const upload = multer();

// TODO: env file
// require('dotenv').config();

const API_KEY = "***REMOVED***"; // replace with your actual API key
const ENDPOINT =
  "***REMOVED***";

async function checkIngredients(file) {
  try {
    const response = await axios({
      method: "post",
      url: ENDPOINT,
      headers: {
        "Content-Type": "application/octet-stream",
        "Ocp-Apim-Subscription-Key": API_KEY,
      },
      data: file.buffer,
    });

    // extract description from response data
    console.log("response", response);
    const result = response;
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
}

// Define the /api/ingredient-check endpoint
app.post("/api/ingredient-check", upload.single("file"), (req, res) => {
  // Handle the file upload
  const file = req.file;
  console.log("file", file);

  checkIngredients(file);

  // Send a response
  res.send("File uploaded!");
});

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
