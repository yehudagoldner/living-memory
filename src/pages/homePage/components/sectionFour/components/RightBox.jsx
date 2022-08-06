import React from "react";
import "./rightBox.css";
import Button from "../../reusable/Button";
import Memorial from "../../reusable/Memorial";
import View from "../../reusable/View";

const RightBox = () => {
  return (
    <div className="rightBox">
      <div className="item1"></div>
      <div className="item2">
        <h3> Nick liked The Beatles, Little Prince and more</h3>
      </div>

      <div className="item-video"></div>
      <div className="item-video"></div>
      <div className="item-video"></div>
      <div className="item-video"></div>
      <div className="item-video"></div>
      <div className="item-video"></div>
      <div className="item-video"></div>
      <div className="item-video"></div>
      <div className="item-13-right">
        <Memorial memorial={"things he liked"} />
        <View />
        <Button value={"Add a thing he liked"} />
      </div>
    </div>
  );
};

export default RightBox;
