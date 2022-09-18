import React from "react";
import "./slider.css";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <div className="arrow">

      <div
        onClick={moveSlide}
        className={direction === "next" ? "arrow-right" : "arrow-left"} />
    </div>
  );
}
