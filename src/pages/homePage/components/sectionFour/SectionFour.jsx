import React from "react";
import "./sectionFour.css";
import RightBox from "./components/RightBox";
import LeftBox from "./components/LeftBox";

const SectionFour = () => {
  return (
    <div className="sectionFour-container">
      <div className="inner">

      <LeftBox />
      <RightBox />
      </div>
    </div>
  );
};

export default SectionFour;
