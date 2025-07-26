import React from "react";
import SectionWrapper from "../SectionWrapper";
import ImageList from "./components/ImageList";
import Column from "./components/Column";
import Labels from "./components/Labels";
import predator from "../../../../../../assets/predator.jpg";

const SectionTwo = () => {
  const imagesData = [
    { id: 1, src: <Labels />, alt: "Описание 1" },
    { id: 2, src: <Labels />, alt: "Описание 2" },
    { id: 3, src: <Labels />, alt: "Описание 3" },
  ];

  return (
    <SectionWrapper title="sectionTwo">
      <Column />
      <ImageList images={imagesData} />
      <Labels />
    </SectionWrapper>
  );
};
export default SectionTwo;
