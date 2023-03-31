import React from "react";
import { useTranslation } from "react-i18next";
import NutritionAnalyzer from "../component/NutritionAnalyzer";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-6">{t("home-header-title")}</h1>
      <p className="text-xl text-center mb-8">{t("home-header-description")}</p>
      <NutritionAnalyzer />
    </div>
  );
};

export default HomePage;
