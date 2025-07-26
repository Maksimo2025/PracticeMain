import React from "react";
import SectionWrapper from "../SectionWrapper";
import LiSection from "./LiSection.jsx";
import { info } from "./const.js";

const SectionOne = () => {
  return (
    <SectionWrapper title="sectionOne">
      <h2> Методы массива</h2>
      <ul>
        {/* <LiSection named={info[0].text} /> */}
        {info.map((inf) => {
          return <LiSection key={inf.text} {...inf} />;
        })}
      </ul>
    </SectionWrapper>
  );
};
export default SectionOne;
