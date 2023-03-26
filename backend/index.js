const express = require("express");
const multer = require("multer");
const axios = require("axios");
// const path = require("path");

const app = express();

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
  Please generate a JSON object that adheres to the following structure and naming conventions, the 3 keys should form its own key and not under each other:
  A "nutrition" key containing an array of objects. Each object must have:
  A "name" key (string) representing the nutrient name (e.g., "calories", "fat", "saturated_fat", "trans_fat", "sodium", "carbohydrates", "sugars", "fiber", "vitamin_a").
  An "amount" key (string) representing the amount of the nutrient (e.g., "160", "12", "4.5").
  A "unit" key (string) representing the unit of measurement (e.g., "kJ", "g", "mg"), if there’s no unit please use “N/A” instead.
  An "ingredients" key containing an array of strings, each representing an ingredient (e.g., "pork”,”beef", "water").
  An "additional_information" key containing an object with the following optional keys:
  "brand" (string) representing the brand name (e.g., "Harvest Meats").
  "msg_free" (boolean) indicating whether the product is MSG-free (e.g., true or false).
  Please ensure the JSON object follows the specified structure and naming conventions.`;

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
  const nutritionInfoJson = result.choices[0]?.message.content;

  // Parse the JSON string returned by the API
  return JSON.parse(nutritionInfoJson);
}

async function getSuggestions(information) {
  const OPENAI_ENDPOINT = "***REMOVED***";
  const OPENAI_API_KEY = "***REMOVED***";

  const prompts = `OCR text:\n${information}\n\nbased on the info, any risks from food safety and any suggestions?`;

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

  const ocrResult = await checkIngredients(file);
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
