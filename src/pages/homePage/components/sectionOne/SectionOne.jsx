import React, { useEffect, useContext } from "react";
import { useState } from "react";

import Slider from "./components/Slider";
import { facebookContentContext } from "../../../../context/context.provider";
import "./sectionOne.css";

const SectionOne = () => {
  const [data, setData] = useContext(facebookContentContext);
  const [birthYear, setBirthYear] = useState("19 June 1948");
  const [passingYear, setPassingYear] = useState("25 November 1974");
  const [biography, setBiography] = useState(
    "Nick Drake was an English singer-songwriter and musician, known for his gentle guitar-based songs. He failed to find a wide audience during his lifetime but his work has gradually achieved wider notice and recognition. Drake signed to Island Records when he was 20 years old and a student at the University of Cambridge, and released his debut album, Five Leaves Left, in 1969. On 25 November 1974, Drake died from an overdose of amd "
  );
  const [personImage, setPersonImage] = useState("person.jpg");
  const [imagesArr, setImagesArr] = useState([]);

  useEffect(() => {
    if (data.profileImages) {
      const currentImageArr = JSON.parse(data.profileImages[0].image);
      // setImagesArr(currentImageArr);
      // console.log(currentImageArr);
      setPersonImage(currentImageArr[0].source);
    }
  }, []);

  return (
    <>
      <div className="sectionOne-container">
        <div className="section-one-content-wrapper">
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

            <div className="continue">Continue reading &gt; </div>
          </div>
          <div className="scroller-container"></div>
          <div className="image-box">
            <img className="flowers" src="frame.png" />
            <div className="profile-pics-wrapper">
              {/* <img className="profile-pics" src={personImage} alt="" /> */}
              <img
                className="profile-pics"
                alt="profile picture"
                srcSet={imagesArr.map((img) => `${img.source} ${img.width}w`)}
                onLoad={(image) => {
                  console.log(image.target.clientWidth);
                  if (image.target.clientWidth < 230) {
                    const oldHeight = image.target.clientHeight
                    const newHeight = oldHeight * 1.5
                    console.log(oldHeight, newHeight);
                    image.target.style.height = newHeight+"px";
                  }
                }}
              />
            </div>
            {data.profileImages && (
              <Slider
                {...{ imagesArr, setImagesArr }}
                length={data.profileImages.length}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
