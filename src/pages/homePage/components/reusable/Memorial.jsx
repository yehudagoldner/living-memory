import React from "react";
import "./memorial.css";

const Memorial = ({ memorial, candlesAmount }) => {
  return <div className="memorial">{candlesAmount} {memorial}</div>;
};

export default Memorial;
