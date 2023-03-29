import React, { useContext } from "react";
import Loading from "../component/Loading";
import NutritionContent from "../component/NutritionContent";
import { NutritionAnalyzerContext } from "../context/NutritionAnalyzerState";

const NutritionResultPage = () => {
  const { state } = useContext(NutritionAnalyzerContext);

  const { loading, result } = state;
  return (
    <div className="flex flex-col justify-center items-center">
      {loading && (
        <>
          <h1 className="text-5xl font-bold mb-6">Hang Tight!</h1>
          <p className="text-xl text-center mb-8">
            A few more seconds of it...
          </p>
          <Loading />
        </>
      )}
      {loading || (
        <>
          <h1 className="text-5xl font-bold mb-6">Here You Go!</h1>
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
