import React from "react";
import { IoCloudUploadSharp } from "react-icons/io5";
import DropZone from "./DropZone";

const UploadImage = ({ handleFileUpload }) => {
  return (
    <section>
      <div className="flex flex-wrap justify-center">
        <div className="max-w-lg rounded overflow-hidden shadow-lg m-4 bg-white">
          <div className="px-6 py-4 h-80">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <IoCloudUploadSharp className="text-4xl text-blue-500" />
              </div>
              <div className="ml-4">
                <div className="text-xl font-bold mb-2">Nutrition Analyzer</div>
                <p className="text-gray-700 text-base">
                  Drag and drop your nutrition label photo here or click to
                  select a file.
                </p>
              </div>
            </div>
            <DropZone handleFileUpload={handleFileUpload} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadImage;
