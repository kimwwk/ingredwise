import React, { useState } from "react";
// import axios from "axios";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";

const DropZone = ({ handleFileUpload }) => {
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const onDrop = async (acceptedFiles) => {
    // Prepare data to be sent
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);

    // Set up request config
    // const config = {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // };

    // Set loading state
    setUploading(true);

    try {
      // Send request to server
      // const response = await axios.post(
      //   "/api/ingredient-check",
      //   formData,
      //   config
      // );
      // console.log(response.data);
      handleFileUpload(acceptedFiles[0]);
    } catch (error) {
      console.error(error);
      setUploadError("An error occurred while uploading the file.");
    } finally {
      // Set loading state
      setUploading(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-all duration-300 ${
        isDragActive
          ? "bg-blue-100 border-blue-500"
          : "bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300"
      }`}
    >
      <input {...getInputProps()} />
      {uploading ? (
        <p className="text-sm font-medium text-gray-500">Uploading...</p>
      ) : (
        <>
          <FiUpload className="mx-auto h-12 w-12 text-gray-400 mb-2" />
          <p className="text-sm font-medium text-gray-500">
            Drag and drop an image here, or click to select a file
          </p>
        </>
      )}
      {uploadError && (
        <p className="text-sm font-medium text-red-500 mt-2">{uploadError}</p>
      )}
    </div>
  );
};

export default DropZone;
