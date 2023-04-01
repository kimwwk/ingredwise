import express from "express";
import multer from "multer";

import { getOcrResult } from "./lib-ocr.js";
import { getNutritionInfoJson, getSuggestions } from "./lib-openai.js";

// Express app initialization
const app = express();

// TODO: env file
// require('dotenv').config();

// TODO: Set up the static file serving
// const frontendPath = path.join(__dirname, "..", "frontend"); // Update the path to point to the frontend directory
// app.use(express.static(frontendPath));

// Set up multer to handle file uploads
const upload = multer();

// Define the /api/ingredient-check endpoint
app.post("/api/ingredient-check", upload.single("file"), async (req, res) => {
  try {
    // Handle the file upload
    const file = req.file;

    const ocrResult = await getOcrResult(file);
    console.info(ocrResult);

    const openAiResult = await getNutritionInfoJson(ocrResult);
    console.info(openAiResult);

    const openAiResult2 = await getSuggestions(ocrResult);
    console.info(openAiResult2);

    // Send a response
    res.send({ nutritionResult: openAiResult, suggestion: openAiResult2 });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).send({ message: "An error occurred during the process." });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
