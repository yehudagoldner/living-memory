import React from "react";
import "./addView.css";
import Memorial from "./Memorial";
import View from "./View";
import Button from "./Button";

const AddView = ({ textInMemorial, textInBtn }) => {
  return (
    <div className="addView-container">
      <Memorial memorial={textInMemorial} />
      <View />
      <Button value={textInBtn} />
    </div>
  );
};

export default AddView;
