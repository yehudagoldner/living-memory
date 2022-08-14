import React, { Children } from "react";
import "./button.css";

const Button = ({ value }) => {
  return <button className="btnHome">{value}</button>;
};

export default Button;
