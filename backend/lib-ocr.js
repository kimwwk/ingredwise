import axios from "axios";

const OCR_API_KEY = "***REMOVED***"; // replace with your actual API key
const OCR_ENDPOINT =
  "***REMOVED***";

// Parse and concatenate the text for the OCR response
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

// Get ocr result
async function getOcrResult(file) {
  const response = await axios({
    method: "post",
    url: OCR_ENDPOINT,
    headers: {
      "Content-Type": "application/octet-stream",
      "Ocp-Apim-Subscription-Key": OCR_API_KEY,
    },
    data: file.buffer,
  });

  if (response.status != 200) {
    throw new Error("Failed to fetch from OpenAI API");
  }

  const result = parseOCRJson(response.data);

  return result;
}

export { getOcrResult };
