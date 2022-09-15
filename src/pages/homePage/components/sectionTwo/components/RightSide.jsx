import React, { useEffect, useState, useContext } from "react";
import "./right.css";
import Button from "../../reusable/Button";
import Memorial from "../../reusable/Memorial";
import View from "../../reusable/View";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import AddView from "../../reusable/AddView";
import { facebookContentContext } from "../../../../../context/context.provider";

const RightSide = () => {
  const [data, setData] = useContext(facebookContentContext);

  const [image, setImage] = useState(
    "Never sing for my supper, I never help my neighbour, Never do what is proper, For my share of labour, I'm a poor boy And I'm a rover, Count your coins and Throw them over them over the- Throw them over them over the Throw them."
  );
  return (
    <div className="rightBox-wrapper">
      <div className="title-right">
        <div className="img-right"></div>
        <h3>Some pictures he took</h3>
      </div>
      <div className="text-right">
        <img src="Picture-section2.png" alt="" />
        <p>
          photo description: date, place, whos in it and more. Photo
          de-scription: date, place, whos in it and more.Photo de-scription:
          date, place..
        </p>
      </div>
    </div>
  );
};

export default RightSide;
