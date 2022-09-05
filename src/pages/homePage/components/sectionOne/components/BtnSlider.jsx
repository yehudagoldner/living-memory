import React from "react";
import "./Slider.css";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <div
      onClick={moveSlide}
      className={direction === "next" ? "arrow-right" : "arrow-left"}
    ></div>
  );
}
