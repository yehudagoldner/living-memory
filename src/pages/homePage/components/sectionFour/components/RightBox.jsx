import React from "react";
import "./rightBox.css";
import AddView from "../../reusable/AddView";

const RightBox = () => {
  return (
    <div className="rightBox-wrapper4">
      <div className="title4">
        <div className="item1"></div>
        <div className="item2">
          <h3> Main likes</h3>
        </div>
      </div>
      <div className="rightBox">
        <div className="item-liked"></div>
        <div className="item-liked"></div>
        <div className="item-liked"></div>
        <div className="item-liked"></div>
        <div className="item-liked"></div>
        <div className="item-liked"></div>
        <div className="item-liked"></div>
        <div className="item-liked"></div>
      </div>
      <div className="rightBox-bottom4">
        <AddView
          textInMemorial={"things he liked"}
          textInBtn={"Add a thing he liked"}
        />
      </div>
    </div>
  );
};

export default RightBox;
