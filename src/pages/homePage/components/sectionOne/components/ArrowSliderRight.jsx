import React from "react";
import { isConstructorDeclaration } from "typescript";
import "./scroller.css";

const ArrowSliderRight = ({ direction, moveSlide }) => {
  return <div className="arrow-right" onClick={moveSlide}></div>;
};

export default ArrowSliderRight;
