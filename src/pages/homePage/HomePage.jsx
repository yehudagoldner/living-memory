import React, { useEffect, useState, useContext } from "react";
import "./homepage.css";
import SectionOne from "./components/sectionOne/SectionOne";
import SectionTwo from "./components/sectionTwo/SectionTwo";
import SectionThree from "./components/sectionThree/SectionThree";
import SectionFour from "./components/sectionFour/SectionFour";
import AddView from "./components/reusable/AddView";
import { facebookContentContext } from "../../context/context.provider";

const HomePage = () => {
  const [data, setData] = useContext(facebookContentContext);

  return (
    <div className="homePage-container">
<<<<<<< HEAD
      
      {data && (
=======
      {/* {data && ( */}
>>>>>>> 5eece0ea5461d9bea847e4659ff9800ab6b982d4
      <>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </>
      {/* )} */}
    </div>
  );
};

export default HomePage;
