import React from "react";
import "./leftBox.css";
import Memorial from "../../reusable/Memorial";
import View from "../../reusable/View";
import Button from "../../reusable/Button";

const LeftBox = () => {
  return (
    <div className="leftBox">
      <div className="item1-left"></div>
      <div className="item2">
        <h3> Five Leaves Left, the first of three albums</h3>
      </div>

      <div className="main-item">
        <video controls="controls" src=""></video>
      </div>

      <div className="item-13">
        <Memorial memorial={"Videos"} />
        <View />
        <Button value={"Add a video"} />
      </div>
    </div>
  );
};

export default LeftBox;
