import React, { useEffect, useState, useContext } from "react";
import "./homepage.css";
import SectionOne from "./components/sectionOne/SectionOne";
import SectionTwo from "./components/sectionTwo/SectionTwo";
import SectionThree from "./components/sectionThree/SectionThree";
import SectionFour from "./components/sectionFour/SectionFour";
import AddView from "./components/reusable/AddView";
import { facebookContentContext } from "../../context/context.provider";

const HomePage = (props) => {
  const [data, setData] = useContext(facebookContentContext);

  return (
    <div className="homePage-container">
      {data && (
        <>
          <SectionOne />
          <SectionTwo />
          <SectionThree userid={props.match.params.userid} />
          <SectionFour />
        </>
      )}
    </div>
  );
};

export default HomePage;
