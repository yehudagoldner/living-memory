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
        <>
=======
      {data && (
      <>
>>>>>>> 15f2369c45314002ef766cc0ea4d1fa121925efa
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </>
      )}
<<<<<<< HEAD
  
  </div>
  )
=======
    </div>
  );
>>>>>>> 15f2369c45314002ef766cc0ea4d1fa121925efa
};

export default HomePage;
