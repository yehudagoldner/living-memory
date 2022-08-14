import React from "react";
import "./homepage.css";

import SectionOne from "./components/sectionOne/SectionOne";
import SectionTwo from "./components/sectionTwo/SectionTwo";
import SectionThree from "./components/sectionThree/SectionThree";
import SectionFour from "./components/sectionFour/SectionFour";
import AddView from "./components/reusable/AddView";

const HomePage = () => {
  return (
    <div className="homePage-container">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
};

export default HomePage;
