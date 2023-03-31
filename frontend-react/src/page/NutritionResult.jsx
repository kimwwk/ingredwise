import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Loading from "../component/Loading";
import NutritionContent from "../component/NutritionContent";
import { NutritionAnalyzerContext } from "../context/NutritionAnalyzerState";

const NutritionResultPage = () => {
  const { t } = useTranslation();
  const { state } = useContext(NutritionAnalyzerContext);

  const { loading, result } = state;
  return (
    <div className="flex flex-col justify-center items-center">
      {loading && (
        <>
          <h1 className="text-5xl font-bold mb-6">
            {t("nutrition-result-loading-title")}
          </h1>
          <p className="text-xl text-center mb-8">
            {t("nutrition-result-loading-description")}
          </p>
          <Loading />
        </>
      )}
      {loading || (
        <>
          <h1 className="text-5xl font-bold mb-6">
            {t("nutrition-result-title")}
          </h1>
        </>
      )}
      {result != null && (
        <NutritionContent
          nutritionResult={result.nutritionResult}
          suggestion={result.suggestion}
        />
      )}
    </div>
  );
};

export default NutritionResultPage;
