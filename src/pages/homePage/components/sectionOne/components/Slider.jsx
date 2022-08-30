import React, { useState } from "react";
import ArrowSliderRight from "./ArrowSliderRight";
import ArrowSliderLeft from "./ArrowSliderLeft";
import "./slider.css";
import "./scroller.css";

const imagesArr = ["1", "2", "3", "4", "5"];

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {};
  const prevSlide = () => {};
  return (
    <div className="container-slider">
      {imagesArr.map((obj, index) => {
        return (
          <div>
            <img src="" />
          </div>
        );
      })}
      <ArrowSliderLeft moveSlide={nextSlide} direction={"next"} />
      <ArrowSliderRight moveSlide={prevSlide} direction={"prev"} />
    </div>
  );
};

export default Slider;
