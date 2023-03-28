import React from "react";

const NutritionContent = ({ nutritionResult, suggestion }) => {
  const { nutrition, per_serving_size, ingredients, additional_info } =
    nutritionResult;

  return (
    <div className="grid grid-cols-2 gap-4 text-center">
      <div className="border border-gray-400 py-4">
        <div className="font-bold text-gray-600 mb-2">Nutrition</div>
        <div className="grid grid-cols-3 gap-2">
          {nutrition.map((nutrient, index) => (
            <React.Fragment key={index}>
              <div className="text-gray-600">{nutrient.name}</div>
              <div className="text-gray-800 font-bold">{nutrient.amount}</div>
              <div className="text-gray-600">{nutrient.unit}</div>
            </React.Fragment>
          ))}
        </div>
        <div className="text-gray-600 mt-4">
          Per Serving ({per_serving_size.amount} {per_serving_size.unit})
        </div>
      </div>
      <div className="border border-gray-400 py-4">
        <div className="font-bold text-gray-600 mb-2">Additional Info</div>
        <div className="text-gray-600 mb-2">
          Product: {additional_info.product}
        </div>
        <div className="text-gray-600 mb-2">Brand: {additional_info.brand}</div>
        <div className="text-gray-600 mb-2">
          MSG Free: {additional_info.msg_free ? "Yes" : "No"}
        </div>
        <div className="font-bold text-gray-600 mb-2">Ingredients</div>
        <div className="text-gray-600 mb-2">
          {ingredients.map((ingredient, index) => (
            <React.Fragment key={index}>
              {index > 0 && ", "}
              {ingredient}
            </React.Fragment>
          ))}
        </div>
        <div className="font-bold text-gray-600 mb-2">Suggestions</div>
        <div className="text-gray-600 mb-2">{suggestion}</div>
      </div>
    </div>
  );
};

export default NutritionContent;
