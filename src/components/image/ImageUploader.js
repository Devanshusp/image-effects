import React, { useState } from "react";
import { imageToMatrix } from "./functions/ImageToMatrix.js";

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [pixelMatrix, setPixelMatrix] = useState([]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
      imageToMatrix(reader.result, setPixelMatrix);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImage && <img src={selectedImage} alt="Selected" />}
    </div>
  );
}

export default ImageUploader;
