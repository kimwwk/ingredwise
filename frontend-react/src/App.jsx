import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./component/Layout";
import { NutritionAnalyzerProvider } from "./context/NutritionAnalyzerState";
import HomePage from "./page/Home";
import NutritionResultPage from "./page/NutritionResult";

const App = () => {
  return (
    <>
      <NutritionAnalyzerProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="result" element={<NutritionResultPage />} />
          </Route>
        </Routes>
      </NutritionAnalyzerProvider>
    </>
  );
};

export default App;
