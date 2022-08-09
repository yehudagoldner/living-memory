import React from "react";
import "./toolbarPhoto.css";

const ToolbarPhoto = () => {
  return (
    <div className="toolbar">
      <div className="toolbar-container">
        <div>Sort Nick's photos by</div>
        <div>
          <select className="select">
            <option value="">Tag</option>
            <option value="">Year</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ToolbarPhoto;
