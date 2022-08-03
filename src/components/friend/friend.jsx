import React from "react";
import "./friend.css";

function Friend() {
  return (
    <div className="friend-wrapper">
      <input type="checkbox"></input>
      <img className="friend-image" src="person.jpg"></img>
      <div>name</div>
    </div>
  );
}

export default Friend;
