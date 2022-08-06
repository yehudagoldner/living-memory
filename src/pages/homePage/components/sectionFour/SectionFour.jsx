import React from "react";
import "./sectionFour.css";
import RightBox from "./components/RightBox";
import LeftBox from "./components/LeftBox";

const SectionFour = () => {
  return (
    <div className="sectionFour-container">
      <LeftBox />
      <RightBox />
    </div>
  );
};

export default SectionFour;
