import React from "react";

const styles = {
  size: {
    width: " 130px",
    height: "150px",
  },
  btn: {
    margin: "5px 32px",
  },
};

const ImageList = ({ images, remove }) => {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <img src={image.src} style={styles.size} alt={image.alt} />
          <br />
          <button onClick={() => remove(image.id)} style={styles.btn}>
            remove
          </button>
          <hr />
          {/* {image.src} */}
        </li>
      ))}
    </ul>
  );
};
export default ImageList;
