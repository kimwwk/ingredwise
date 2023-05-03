import express from "express";
import multer from "multer";

import { getOcrResult } from "./lib-ocr.js";
import { getNutritionInfoJson, getSuggestions } from "./lib-openai.js";

// Express app initialization
const app = express();

// TODO: env file
// require('dotenv').config();

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

// Dummy data
const dummyData = {
  shortUrl: "https://short.ly/xyz123",
  longUrl: "https://example.com",
};

// POST request to shorten a long URL
app.post("/shorten", (req, res) => {
  const longUrl = req.body.url;

  if (!longUrl) {
    res.status(400).json({ error: "Please provide a URL" });
  } else {
    res.status(200).json({ shortUrl: dummyData.shortUrl });
  }
});

// GET request to retrieve the long URL using a short URL
app.get("/expand/:shortUrlCode", (req, res) => {
  const shortUrlCode = req.params.shortUrlCode;

  if (!shortUrlCode) {
    res.status(400).json({ error: "Please provide a short URL code" });
  } else {
    res.status(200).json({ longUrl: dummyData.longUrl });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
