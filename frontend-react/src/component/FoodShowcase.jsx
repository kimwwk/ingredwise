import React from "react";

const FoodShowcase = ({ image }) => {
  return (
    <section>
      <div className="flex flex-wrap justify-center">
        <div className="max-w-lg rounded-md overflow-hidden shadow-lg m-4">
          <div className="relative h-80">
            <img
              src={image}
              alt="Food Showcase"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 right-0 mr-4 mt-4 bg-muted-coral text-white py-1 px-2 rounded-full text-sm">
              Featured
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodShowcase;
