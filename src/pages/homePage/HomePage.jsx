import React, { useEffect, useState } from "react";
import "./homepage.css";

import SectionOne from "./components/sectionOne/SectionOne";
import SectionTwo from "./components/sectionTwo/SectionTwo";
import SectionThree from "./components/sectionThree/SectionThree";
import SectionFour from "./components/sectionFour/SectionFour";
import AddView from "./components/reusable/AddView";

const HomePage =  () => {
  const [data, setData] = useState(null)
  
  useEffect(()=>{
    (async ()=>{
      const response = await fetch("http://go-vegan.co.il:4444/all");
      const results = await response.json()
      setData(results)
      console.log(results);
    })()
    
  }, [])
  return (
    <div className="homePage-container">
      {data && (
      <>
        <SectionOne data={data}/>
        <SectionTwo  />
        <SectionThree />
        <SectionFour />
      </>
       )} 
    </div>
  );
};

export default HomePage;
