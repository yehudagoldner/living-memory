import React from "react";
// import React from "react";
import { useState, useEffect, useContext } from "react";
import candle from "./assets/candle.png";
import flower from "./assets/flower.png";
import config from "../../config"
import icon from "./assets/icon.png";
import { facebookContentContext } from "../../context/context.provider";

import "./Candles.css";

function Candles(props) {  
  const [icon, setIcon] = useState("candle");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useContext(facebookContentContext);
  const userId = props.match.params.userid;  
  useEffect(() => {
    
    console.log(userId, data);
  }, []);

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(data);
      let res = await fetch(
        `${config.API_ENDPOINT}/api/10158842065863652/Candles/`,
        {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            icon,
            text,
            userId
          }),
        }
      );
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setIcon("candle");
        setText("");
        setMessage("Candle created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  // function handleSubmit(response) {
  //   response.preventDefault();
  //   // console.log(event);
  //   console.log("Submit");
  //   console.log("name", name);
  //   console.log("description", description);
  //   console.log("img", img);
  // }

  // function handleNameChange(event) {
  //   setName(event.target.value);
  //   console.log(name);
  // }
  // function handleDescriptionChange(event) {
  //   setDescription(event.target.value);
  //   console.log("description", description);
  // }
  // function handleClickOnImg(event) {
  //   if (event.target.value === "checked") {
  //     setImg(event.target.value);
  //   }
  // }

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

      {/* Form */}
      <form onSubmit={handleSubmit} className="form-section">
        Choose: <br />
        <img
          onClick={(e) => setIcon("candle")}
          className={icon === "candle" ? "active" : ""}
          src={candle}
        ></img>
        <img
          onClick={(e) => setIcon("flower")}
          className={icon === "flower" ? "active" : ""}
          src={flower}
        ></img>
        <br></br>
        <p>Name: </p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <p>Description: </p>
        <textarea
          cols="40"
          rows="5"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <br></br>
        <button className="submit-button" type="submit">
          Submit
        </button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default Candles;
