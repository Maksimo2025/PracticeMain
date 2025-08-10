import React, { useState } from "react";
import SectionWrapper from "../SectionWrapper";
import ImageList from "./components/ImageList";
import Column from "./components/Column";
import Labels from "./components/Labels";
import predator from "../../../../../../assets/predator.jpg";

const styles = {
  empty: {
    margin: "10px 20px",
    fontSize: "30px",
    textShadow: "2px 2px 1px red",
  },
};

const SectionTwo = () => {
  const [imagesData, setImagesData] = useState([
    { id: 1, src: predator, alt: "Описание 1" },
    { id: 2, src: predator, alt: "Описание 2" },
    { id: 3, src: predator, alt: "Описание 3" },
  ]);
  const removeImage = (id) => {
    setImagesData(
      imagesData.filter((imgD) => {
        return imgD.id !== id;
      })
    );
  };

  return (
    <SectionWrapper title="sectionTwo">
      <Column />
      {imagesData.length !== 0 ? (
        <ImageList images={imagesData} remove={removeImage} />
      ) : (
        <div style={styles.empty}> Nothing </div>
      )}

      <Labels />
    </SectionWrapper>
  );
};
export default SectionTwo;
