import React from "react";
import "./save.css";

function Save({ content }) {
  return (
    <div className="save-border">
      <button className="save">{content}</button>
    </div>
  );
}

export default Save;
