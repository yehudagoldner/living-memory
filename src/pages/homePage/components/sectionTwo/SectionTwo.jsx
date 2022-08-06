import React from "react";
import "./sectionTwo.css";
import RightSide from "./components/RightSide";
import LeftSide from "./components/LeftSide";

const SectionTwo = () => {
  return (
    <div className="sectionTwo-container">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default SectionTwo;
