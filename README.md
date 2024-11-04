# IngredWise: AI-Powered Nutrition Label Analyzer

This repository contains a full-stack application that helps users analyze nutrition labels on food products using AI. The application utilizes Optical Character Recognition (OCR) to extract text from images of nutrition labels and then leverages OpenAI's ChatGPT to analyze the extracted information.

## How it Works

1. **Image Upload:** Users upload an image of a nutrition label through the frontend interface.
2. **OCR Processing:** The backend uses OCR technology (currently unspecified in the provided code, you'll need to add the OCR library you choose) to extract text from the uploaded image.
3. **AI Analysis:** The extracted text is sent to OpenAI's ChatGPT for analysis. ChatGPT is used to interpret the nutritional information, provide insights, and answer user queries about the product.
4. **Results Display:** The analysis results from ChatGPT are displayed to the user in a clear and understandable format on the frontend.

## Technologies Used

- **Frontend:** React, React Router, Axios, React Dropzone, i18next
- **Backend:** Node.js, Express, Multer, Axios
- **AI:** OpenAI ChatGPT
- **OCR:** Cognitive Services from Azure

## Repository Structure

- **`backend/`:** Contains the Node.js backend code.
  - `index.js`: Main backend file.
- **`frontend-react/`:** Contains the React frontend code.
  - `src/`: Source code for the React application.

## Getting Started

### Prerequisites

- Node.js and npm installed
- OpenAI API key

### Installation

1. Clone the repository: `git clone <repository_name>`
2. Install backend dependencies: `cd backend && npm install`
3. Install frontend dependencies: `cd frontend-react && npm install`
4. Set up your API keys:
   1. `const OCR_API_KEY = ""`
   2. `const OCR_ENDPOINT = ""`
   3. `const OPENAI_ENDPOINT = ""`
   4. `const OPENAI_API_KEY = ""`
5. Start the backend server: `npm start` (from the `backend` directory)
6. Start the frontend development server: `npm start` (from the `frontend-react` directory)

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

## Monetization Ideas [Future]

This application has the potential to be monetized through various avenues:

- **Affiliate Marketing:** Redirect users to relevant product pages on online retailers (e.g., Amazon, health food stores) and earn commissions on sales.
- **Sponsored Content:** Partner with health food companies or other relevant businesses to create sponsored blog posts or analyses.
- **Premium Features:** Offer advanced features like personalized nutrition recommendations or in-depth ingredient analysis as a paid subscription.

## License
