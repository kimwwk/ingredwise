import express from "express";
import multer from "multer";
import axios from "axios";

import { getOcrResult } from "./lib-ocr.js";

// Express app initialization
const app = express();

// TODO: env file
// require('dotenv').config();

// TODO: Set up the static file serving
// const frontendPath = path.join(__dirname, "..", "frontend"); // Update the path to point to the frontend directory
// app.use(express.static(frontendPath));

// Set up multer to handle file uploads
const upload = multer();

async function getNutritionInfoJson(ocrText) {
  const OPENAI_ENDPOINT = "***REMOVED***";
  const OPENAI_API_KEY = "***REMOVED***";

  const prompts = `OCR text:\n${ocrText}
  ---
  Generate a JSON object with the following 3 objects

  1.
  "nutrition" key (array of objects),naming convention is snake case (snake_case), key name must pick from the following list and align with the order in the list
  calories, total_fat, saturated_fat, trans_fat, cholesterol, sodium, carbohydrate, sugars, protein, fiber, iron,calcium,potassium,magnesium,zinc,phosphorus,vitamin_a, vitamin_c, vitamin_d, vitamin_e, vitamin_k, vitamin_b1, vitamin_b2, vitamin_b3, vitamin_b5, vitamin_b6, vitamin_b7, vitamin_b9, vitamin_b12)
  require to contain:
  - "amount" (string) represents the amount of the nutrient (e.g., "160", "12", "4.5"), if there's none leave it empty ("")
  - "unit" (string) represents the unit of measurement (e.g., "kJ", "g", "mg"), if there's no unit leave it empty ("")

  2. 
  "per_serving_size" key (object) require to contain
  - "amount" (string), (e.g., "160", "12", "4.5")
  - "unit" (string), (e.g., "kJ", "g", "mg")

  3.
  "ingredients" key (array of strings) represents the product's ingredients (e.g., ["pork", "beef", "water"])
  
  4.
  "additional_info" key (object) represents other information, optional to contain in (string) or (boolean) type
  - "product" (string) 
  - "brand" (string) 
  `;

  const response = await axios({
    method: "post",
    url: OPENAI_ENDPOINT,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    data: {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompts }],
      max_tokens: 1000,
    },
  });

  if (response.status != 200) {
    throw new Error("Failed to fetch from OpenAI API");
  }

  const result = response.data;
  console.log("openAI result", result);
  const nutritionInfoJson = result.choices[0]?.message.content;

  // Parse the JSON string returned by the API
  return JSON.parse(nutritionInfoJson);
}

async function getSuggestions(information) {
  const OPENAI_ENDPOINT = "***REMOVED***";
  const OPENAI_API_KEY = "***REMOVED***";

  const prompts = `OCR text:\n${information}\n\nbased on the info, analyse the food ingredients, list out which and why the ingredients is healthy to intake or should be avoid for normal person?`;

  // const configuration = new Configuration({
  //   organization: "YOUR_ORG_ID",
  //   apiKey: process.env.OPENAI_API_KEY,
  // });
  // const openai = new OpenAIApi(configuration);
  // const response = await openai.;

  const response = await axios({
    method: "post",
    url: OPENAI_ENDPOINT,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    data: {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompts }],
      max_tokens: 500,
    },
  });

  if (response.status != 200) {
    throw new Error("Failed to fetch from OpenAI API");
  }

  const result = response.data;
  console.log("openAI result", result);
  return result.choices[0]?.message.content;
}

// Define the /api/ingredient-check endpoint
app.post("/api/ingredient-check", upload.single("file"), async (req, res) => {
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
});

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
