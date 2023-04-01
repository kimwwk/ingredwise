import React, { useState } from "react";

const NutritionContent = ({ nutritionResult, suggestion }) => {
  const { nutrition, per_serving_size, ingredients, additional_info } =
    nutritionResult;


  const [nutritionData, setNutritionData] = useState(nutrition);

  const handleAmountChange = (index, event) => {
    const value = event.target.value;

    // Check if the input value is a valid decimal number
    if (/^\d*\.?\d*$/.test(value)) {
      const updatedNutrition = [...nutritionData];
      updatedNutrition[index].amount = value;
      setNutritionData(updatedNutrition);
    }
  };

  return (
    <section className="flex flex-col justify-center">
      <div className="m-4">
        <div className="grid grid-cols-1 gap-4 text-center">
          <div className="rounded-md overflow-hidden shadow-md bg-white">
            <div className="px-6 py-4">
              <div className="font-bold text-gray-600 mb-2">Nutrition</div>
                <div className="grid grid-cols-3 gap-2">
                  {nutritionData.map((nutrient, index) => (
                    <React.Fragment key={index}>
                      <div className="text-gray-600">{nutrient.name}</div>
                      <div className="text-gray-800 font-bold">
                        <input
                          type="text"
                          value={nutrient.amount}
                          onChange={(event) => handleAmountChange(index, event)}
                          className="text-center w-full"
                        />
                      </div>
                      <div className="text-gray-600">{nutrient.unit}</div>
                    </React.Fragment>
                  ))}
                </div>
              <div className="text-gray-600 mt-4">
                Per Serving ({per_serving_size.amount} {per_serving_size.unit})
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-4">
        <div className="rounded-md overflow-hidden shadow-md bg-white">
          <div className="px-6 py-4">
            <div className="font-bold text-gray-600 mb-2">Additional Info</div>
            <div className="text-gray-600 mb-2">
              Product: {additional_info.product}
            </div>
            <div className="text-gray-600 mb-2">
              Brand: {additional_info.brand}
            </div>
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
      </div>
    </section>
  );
};

export default NutritionContent;
