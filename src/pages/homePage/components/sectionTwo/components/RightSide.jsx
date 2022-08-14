import React from "react";
import "./right.css";
import Button from "../../reusable/Button";
import Memorial from "../../reusable/Memorial";
import View from "../../reusable/View";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import AddView from "../../reusable/AddView";

const RightSide = () => {
  return (
    <div className="rightBox-wrapper">
      <div className="title-right">
        <div className="img-right"></div>
        <h3>6 years old on his way to his first day at school</h3>
      </div>
      <div className="text-right">
        <img src="Picture-section2.png" alt="" />
        <p>
          photo description: date, place, whos in it and more. Photo
          de-scription: date, place, whos in it and more.Photo de-scription:
          date, place..
        </p>
      </div>
      <AddView textInMemorial={"Photos"} textInBtn={"Add a photo"} />
    </div>
  );
};

export default RightSide;
