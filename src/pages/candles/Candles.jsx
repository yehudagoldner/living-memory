import React from "react";
import candle from "./assets/candle.png";
import flower from "./assets/flower.png";
import icon from "./assets/icon.png";
import "./Candles.css";

export default function Candles() {
  function handleSubmit(event) {
    console.log(event);
  }

  return (
    <div className="Candles">
      <div className="head-wrapper">
        <span>Light a candle</span>
        <div className="right-side-buttons">
          <a href="#">View candles</a>
          <button>
            {/* <img className="icon" src="#"></img> */}
            Invite friend to add a video
          </button>
        </div>
      </div>
      <br />
      <hr />
      <div className="form-section" onSubmit={handleSubmit}>
        Choose: <br />
        <a href="#">
          <img src={candle}></img>
        </a>
        <a href="#">
          <img src={flower}></img>
        </a>
        <br></br>
        <p>Name: </p>
        <input type="text"></input>
        <br />
        <p>Description: </p>
        <textarea name="Text1" cols="40" rows="5"></textarea>
        <br></br>
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
}
