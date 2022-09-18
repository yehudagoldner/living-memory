import React from "react";
import "./sectionTwo.css";
import RandomPost from "./components/RandomPost"


const SectionTwo = () => {
  return (
    <div className="sectionTwo-container">
      <RandomPost type="text" />
      <RandomPost type="image"/>
    </div>
  );
};

export default SectionTwo;
