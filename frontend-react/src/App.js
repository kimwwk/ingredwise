import React, { useRef } from "react";
import "./App.css";

function App() {
  const fileInputRef = useRef(null);

  function displayResponseText(responseText) {
    const responseContainer = document.querySelector("#response-text-display");
    responseContainer.innerHTML = "";

    const responseTextString = JSON.stringify(responseText, null, 2); // Stringify the response with indentation
    const responseTextElement = document.createElement("pre");
    responseTextElement.textContent = responseTextString;
    responseContainer.appendChild(responseTextElement);
  }

  function uploadFile(file) {
    const formData = new FormData();
    formData.append("file", file);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/ingredient-check");
    xhr.onload = function () {
      if (xhr.status === 200) {
        // alert("File uploaded successfully!");
        const responseText = JSON.parse(xhr.responseText);
        displayResponseText(responseText);
      } else {
        alert("Error uploading file. Please try again.");
      }
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
        <div class="dropzone">
          <p>Drag and drop an image here, or click to select a file</p>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
        <button class="submit-button" onClick={handleClick}>
          Check Ingredients
        </button>
        <div id="response-text-display" class="response-text-display"></div>
      </main>
    </>
  );
}

export default App;
