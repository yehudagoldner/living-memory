import React, { Children } from "react";
import "./button.css";

const Button = ({ value }) => {
  return <button className="btn">{value}</button>;
};

export default Button;
