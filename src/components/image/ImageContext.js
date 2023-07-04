import React, { useState } from "react";

function ImageContext() {
  const [image, setImage] = useState(null);
  const [pixelMatrix, setPixelMatrix] = useState([]);

  return <div>ImageContext</div>;
}

export default ImageContext;
