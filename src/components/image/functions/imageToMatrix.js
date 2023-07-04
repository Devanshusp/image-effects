export function imageToMatrix(image) {
  // Create a canvas element
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // Set the canvas dimensions to match the image
  canvas.width = image.width;
  canvas.height = image.height;

  // Draw the image onto the canvas
  ctx.drawImage(image, 0, 0);

  // Get the pixel data from the canvas
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const pixels = imageData.data;

  // Convert the pixel data into a 2D matrix
  const matrix = [];
  for (let y = 0; y < canvas.height; y++) {
    const row = [];
    for (let x = 0; x < canvas.width; x++) {
      const red = pixels[(y * canvas.width + x) * 4];
      const green = pixels[(y * canvas.width + x) * 4 + 1];
      const blue = pixels[(y * canvas.width + x) * 4 + 2];
      const alpha = pixels[(y * canvas.width + x) * 4 + 3];

      // Store the pixel as an object with RGBA values
      row.push({ red, green, blue, alpha });
    }
    matrix.push(row);
  }

  // The matrix variable now contains a 2D representation of the image pixels
  console.log(matrix);
}
