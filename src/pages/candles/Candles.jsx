import React from "react";
// import React from "react";
import { useState, useEffect, useContext } from "react";
import candle from "./assets/candle.png";
import flower from "./assets/flower.png";
import icon from "./assets/icon.png";
import { facebookContentContext } from "../../context/context.provider";

import "./Candles.css";

function Candles() {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useContext(facebookContentContext);

  useEffect(() => {
    console.log(data);
  }, []);

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(data);
      let res = await fetch(
        "http://159.89.46.123:4444/10158842065863652/api/Candles/",
        {
          method: "POST",
          body: JSON.stringify({
            name: name,
            img: img,
            description: description,
          }),
        }
      );
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setImg("");
        setDescription("");
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
        <a
          href="#"
          type="checkbox"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        >
          <img src={candle}></img>
        </a>
        <a
          href="#"
          type="checkbox"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        >
          <img src={flower}></img>
        </a>
        <br></br>
        <p>Name: </p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* {name} */}
        <br />
        <p>Description: </p>
        <textarea
          cols="40"
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        >
          {/* {description} */}
        </textarea>
        {description}
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
