import React, { useState, useContext, useEffect } from "react";
import "./slider.css";
import BtnSlider from "./BtnSlider";

import { facebookContentContext } from "../../../../../context/context.provider";

export default function Slider({ imagesArr, setImagesArr, length }) {
  const [slideIndex, setSlideIndex] = useState(1);
  const [data, setData] = useContext(facebookContentContext);
  const [personImage, setPersonImage] = useState();

  useEffect(() => {
    if (data.profileImages) {
      const currentImageArr = JSON.parse(data.profileImages[slideIndex].image);
      // console.log(data);
      // setImagesArr(currentImageArr);

      setImagesArr(currentImageArr);
      // setPersonImage(currentImageArr[0].source);
    }
  });

  const nextSlide = () => {
    if (slideIndex !== imagesArr.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === imagesArr.length) {
      setSlideIndex(1);
    }
  };
  // };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(imagesArr.length);
    }
  };

  return (
    <div className="container-slider">
      {/* <div className="slide active-anim"></div> */}
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <BtnSlider moveSlide={nextSlide} direction={"next"} />

      {/* <div className="container-dots">
        {Array.from({ length }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div> */}
    </div>
  );
}
