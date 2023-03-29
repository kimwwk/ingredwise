import React from "react";
import NutritionAnalyzer from "../component/NutritionAnalyzer";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-6">Welcome to Nutrition Analyzer</h1>
      <p className="text-xl text-center mb-8">
        Upload a photo of the nutrition fact label of your food product and
        we'll analyze it for you!
      </p>

      <NutritionAnalyzer />
    </div>
  );
};

export default HomePage;
