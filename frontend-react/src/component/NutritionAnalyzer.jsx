import React, { useRef, useContext } from "react";
import HowToUse from "../component/HowToUse";
import UploadImage from "../component/UploadImage";
import FoodShowcase from "../component/FoodShowcase";
import food1 from "../asset/image/food.jpg";
import food2 from "../asset/image/food2.webp";
import nutritionFacts from "../asset/image/sample-nutrition-facts.jpg";
import { NutritionAnalyzerContext } from "../context/NutritionAnalyzerState";
import { useNavigate } from "react-router-dom";

const NutritionAnalyzer = () => {
  const { dispatch } = useContext(NutritionAnalyzerContext);
  const navigate = useNavigate();

  const fileInputRef = useRef(null);
  function uploadFile(file) {
    dispatch({ type: "setLoading", payload: true });
    dispatch({ type: "setLoading", payload: true });
    const formData = new FormData();
    formData.append("file", file);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://137.184.162.119/api/ingredient-check");
    xhr.onload = function () {
      if (xhr.status === 200) {
        const responseText = JSON.parse(xhr.responseText);
        dispatch({ type: "setResult", payload: responseText });
      } else {
        alert("Error uploading file. Please try again.");
      }
      dispatch({ type: "setLoading", payload: false });
    };
    xhr.send(formData);
    navigate("/result");
  }

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = () => {
    const file = fileInputRef.current.files[0];
    uploadFile(file);
  };

  return (
    <>
      <div className="flex mb-10">
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
        <button
          className="bg-muted-coral hover:bg-red-600 text-white font-bold py-2 px-4 rounded border-olive-green mr-4"
          onClick={() => handleClick()}
        >
          Upload Image Now!
        </button>
        <button
          className="border border-gray-500 hover:bg-gray-100 text-gray-500 font-bold py-2 px-4 rounded"
          onClick={() => {}}
        >
          I wanna know how to use
        </button>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <UploadImage handleFileUpload={uploadFile} />
          <FoodShowcase image={food1} />
          <FoodShowcase image={food2} />
          <FoodShowcase image={nutritionFacts} />
        </div>
      </div>
      <HowToUse />
    </>
  );
};

export default NutritionAnalyzer;
