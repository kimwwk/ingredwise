import React, { useState } from "react";
import HowToUse from "../component/HowToUse";
import UploadImage from "../component/UploadImage";
import Loading from "../component/Loading";
import NutritionContent from "../component/NutritionContent";

const HomePage = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showHowToUse, setShowHowToUse] = useState(false);

  function uploadFile(file) {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/ingredient-check");
    xhr.onload = function () {
      if (xhr.status === 200) {
        // alert("File uploaded successfully!");
        const responseText = JSON.parse(xhr.responseText);
        setResult(responseText);
      } else {
        alert("Error uploading file. Please try again.");
      }
      setLoading(false);
    };
    xhr.send(formData);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl font-bold mb-6">Welcome to Nutrition Analyzer</h1>
      <p className="text-xl text-center mb-8">
        Upload a photo of the nutrition fact label of your food product and
        we'll analyze it for you!
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowHowToUse(!showHowToUse)}
      >
        {showHowToUse ? "Hide How to Use" : "Show How to Use"}
      </button>
      {showHowToUse && <HowToUse />}
      {showHowToUse || (
        <>
          {result == null && <UploadImage handleFileUpload={uploadFile} />}
          {loading && <Loading />}
          {result != null && (
            <NutritionContent
              nutritionResult={result.nutritionResult}
              suggestion={result.suggestion}
            />
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
