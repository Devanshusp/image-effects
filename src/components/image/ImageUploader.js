import React, { useState } from "react";

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="ImageUploader">
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImage && (
        <img className="original" src={selectedImage} alt="Selected" />
      )}
    </div>
  );
}

export default ImageUploader;
