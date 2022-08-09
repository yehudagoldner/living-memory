import React from "react";
import { Link } from "react-router-dom";

import "./EmailButton.css";

const EmailButton = () => {
  return (
    <Link className="email" to="/email">
      Send an Email
    </Link>
  );
};

export default EmailButton;
