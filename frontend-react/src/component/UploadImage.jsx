import React from "react";
import { IoCloudUploadSharp } from "react-icons/io5";
import DropZone from "./DropZone";
import nutritionFacts from "../asset/image/sample-nutrition-facts.png";

const UploadImage = ({ handleFileUpload }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center pb-12">
          <h2 className="text-3xl font-bold mb-4">
            Upload Your Nutrition Label
          </h2>
          <p className="text-gray-600">
            Upload a clear photo of the nutrition fact label from the product
            you want to analyze.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="max-w-lg rounded overflow-hidden shadow-lg m-4">
            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <div className="flex-shrink-0">
                  <IoCloudUploadSharp className="text-4xl text-blue-500" />
                </div>
                <div className="ml-4">
                  <div className="text-xl font-bold mb-2">
                    Upload your photo
                  </div>
                  <p className="text-gray-700 text-base">
                    Drag and drop your nutrition label photo here or click to
                    select a file.
                  </p>
                </div>
              </div>
              <DropZone handleFileUpload={handleFileUpload} />
            </div>
          </div>
          <div className="max-w-md rounded overflow-hidden shadow-lg m-4">
            <div className="hidden md:block">
              <div className="relative">
                <img
                  src={nutritionFacts}
                  alt="Nutrition Facts Sample"
                  className="w-full h-auto"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <p className="text-xl font-bold mb-2">Quick Sample</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadImage;
