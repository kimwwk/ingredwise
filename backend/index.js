const express = require("express");
const multer = require("multer");
const axios = require("axios");
const path = require("path");

const app = express();
// Set up the static file serving
const frontendPath = path.join(__dirname, "..", "frontend"); // Update the path to point to the frontend directory
app.use(express.static(frontendPath));

// Set up multer to handle file uploads
const upload = multer();

//function list
//Parse and concatenate the text for the OCR response
function parseOCRJson(json) {
  const result = [];

  for (const region of json.regions) {
    for (const line of region.lines) {
      let lineText = "";
      for (const word of line.words) {
        lineText += " " + word.text;
      }
      result.push(lineText.trim());
    }
  }

  return result;
}
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

    const result = parseOCRJson(response.data);

    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
}

// Define the /api/ingredient-check endpoint
app.post("/api/ingredient-check", upload.single("file"), async (req, res) => {
  // Handle the file upload
  const file = req.file;
  console.log("file", file);

  const result = await checkIngredients(file);

  // Send a response
  console.info(result);
  res.send(result);
});

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
