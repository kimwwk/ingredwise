import "./App.css";

function App() {
  function handleDrop(event) {
    event.preventDefault();
    const files = event.dataTransfer
      ? event.dataTransfer.files
      : event.target.files;
    uploadFile(files[0]);
  }

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

  function handleSubmit(event) {
    event.preventDefault();
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = handleDrop;
    fileInput.click();
  }

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
        <button class="submit-button">Check Ingredients</button>
        <div id="response-text-display" class="response-text-display"></div>
      </main>
    </>
  );
}

export default App;
