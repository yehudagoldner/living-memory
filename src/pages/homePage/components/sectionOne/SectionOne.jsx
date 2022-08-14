import React from "react";
import { useState } from "react";
import Scroller from "./components/Scroller";
import "./sectionOne.css";

const SectionOne = () => {
  const [birthYear, setBirthYear] = useState("19 June 1948");
  const [passingYear, setPassingYear] = useState("25 November 1974");
  const [biography, setBiography] = useState(
    "Nick Drake was an English singer-songwriter and musician, known for his gentle guitar-based songs. He failed to find a wide audience during his lifetime but his work has gradually achieved wider notice and recognition. Drake signed to Island Records when he was 20 years old and a student at the University of Cambridge, and released his debut album, Five Leaves Left, in 1969. On 25 November 1974, Drake died from an overdose of amd "
  );
  const [personImage, setPersonImage] = useState("person.jpg");

  return (
    <>
      <div className="sectionOne-container">
        <div className="bio-container">
          <div className="years-container">
            <div id="birth-year">
              <strong>Birth:</strong> {birthYear}
            </div>
            <div id="passing-year">
              <strong>Passing:</strong> {passingYear}
            </div>
          </div>
          <br></br>
          <div className="text-container">{biography}</div>

          <div className="continue" onClick={() => setBiography("hello")}>
            Continue reading >{" "}
          </div>
        </div>
        <div className="image-box">
          <img className="flowers" src="frame.png" />
          <div className="profile-pics-wrapper">
            <img className="profile-pics" src={personImage} alt="" />
          </div>
        </div>
        <div className="scroller-container">
          <Scroller />
        </div>
      </div>
    </>
  );
};

export default SectionOne;
