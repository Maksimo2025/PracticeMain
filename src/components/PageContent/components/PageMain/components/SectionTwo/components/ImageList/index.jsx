import React from "react";

const ImageList = ({ images }) => {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          {/* <img src={image.src} alt={image.alt} /> */}
          {image.src}
        </li>
      ))}
    </ul>
  );
};
export default ImageList;
