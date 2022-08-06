import React from "react";
import "./right.css";
import Button from "../../reusable/Button";
import Memorial from "../../reusable/Memorial";
import View from "../../reusable/View";

const RightSide = () => {
  return (
    <div className="rightSide">
      <div className="container-right">
        <div className="title-right">
          <div className="img-right"></div>
          <h3>
            6 years old on his way to <br></br> his first day at school
          </h3>
        </div>
        <div className="text-right">
          <img src="Picture-section2.png" alt="" />
          <p>
            photo description: date, place, whos in it and more. Photo
            de-scription: date, place, whos in it and more.{" "}
          </p>
        </div>
      </div>
      <div className="bottom-right">
        <Memorial memorial={"Photos"} />
        <View />
        <Button value={"Add a photo"} />
      </div>
    </div>
  );
};

export default RightSide;
