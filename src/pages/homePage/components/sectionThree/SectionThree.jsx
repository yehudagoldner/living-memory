import React from "react";
import Button from "../reusable/Button";
import "./sectionThree.css";
import { IoIosArrowForward } from "react-icons/io";
import Memorial from "../reusable/Memorial";
import View from "../reusable/View";
import axios from "axios";

const SectionThree = ({ userid }) => {
  axios
    .get(`https://living-memory.xyz:8443/api/${userid}/candles`)
    // .get("http://159.89.46.123:4444/api/Candles/")
    .then(handleResponse);

  function handleResponse(response) {
    console.log(response.target.value);
  }

  return (
    <div className="sectionThree-container">
      <h3>
        <div className="img-title"> </div>
        {"\u00a0\u00a0"}
        Nick, I will never ever forget you! Nick, I will never ever forget you!
      </h3>
      <p>
        "Little things I should have said and done, I just never took the time,
        But you were always on my mind.<br></br>Little things I should have said
        and done, I just never took the time, But you were always on my mind
        <br></br>Little things I should have said and done, I just never took
        the time, But you were always on my mind. Little things I should have
        said".
      </p>
      <div>-Janis Ian, May 15, 2012-</div>

      <br></br>
      <div className="icon-container">
        <IoIosArrowForward />
      </div>
      <div className="bottom-sectionThree">
        <Memorial memorial={"Candles"} />
        <View />
        <Button value={"Add a candle"} />
      </div>
    </div>
  );
};

export default SectionThree;
