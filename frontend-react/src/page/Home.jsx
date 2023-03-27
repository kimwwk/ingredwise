import React, { useRef, useState } from "react";
import DropZone from "../component/DropZone";
import Loading from "../component/Loading";
import NutritionContent from "../component/NutritionContent";

function App() {
  const fileInputRef = useRef(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  function uploadFile(file) {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/ingredient-check");
    xhr.onload = function () {
      if (xhr.status === 200) {
        // alert("File uploaded successfully!");
        const responseText = JSON.parse(xhr.responseText);
        setResult(responseText);
      } else {
        alert("Error uploading file. Please try again.");
      }
      setLoading(false);
    };
    xhr.send(formData);
  }

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = () => {
    const file = fileInputRef.current.files[0];
    uploadFile(file);
  };

  return (
    <>
      <header>
        <h1>Ingredient Checker</h1>
        <h2>Upload, Identify & Review Ingredients</h2>
      </header>
      <main>
        <br></br>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
        <button class="submit-button" onClick={handleClick}>
          Check Ingredients
        </button>
        <br></br>
        <DropZone />
        {loading && <Loading />}
        {result && (
          <NutritionContent nutritionResult={result.nutritionResult} />
        )}
      </main>
    </>
  );
}

export default App;
