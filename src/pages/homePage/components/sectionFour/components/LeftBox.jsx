import React from "react";
import "./leftBox.css";
import AddView from "../../reusable/AddView";

const LeftBox = () => {
  return (
    <div className="leftBox">
      <div className="title4-left">
        <div className="item1-left"></div>
        <div className="item2">
          <h3>
            {" "}
            Five Leaves Left, the<br></br> first of three albums
          </h3>
        </div>
      </div>

      <div className="main-item">
        <video controls="controls" src=""></video>
      </div>

      <AddView textInMemorial={"Videos"} textInBtn={"Add a video"} />
    </div>
  );
};

export default LeftBox;
