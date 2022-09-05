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
      <>
=======
      

      {data && (                
        <>

>>>>>>> 0578df523ac7e05b90b534b824cedf5a3a8cb930
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </>
<<<<<<< HEAD
=======
      )}

>>>>>>> 0578df523ac7e05b90b534b824cedf5a3a8cb930
    </div>
  );
};

export default HomePage;
