import React from "react";
import "./scroller.css";

const Scroller = () => {
  return (
    <div className="scroller">
      <div className="arrow-left" onClick={() => console.log("move")}></div>

      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div className="arrow-right" onClick={() => console.log("move")}></div>
    </div>
  );
};

export default Scroller;
