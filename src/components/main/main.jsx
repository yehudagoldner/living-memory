import React from "react";
import "./main.css";
import Toolbar from "../toolbar/toolbar.jsx";
import Friend from "../friend/friend.jsx";
import Triangle from "../triangle/triangle.jsx";

function Main() {
  return (
    <div className="main">
      <h2>Invite Friends</h2>
      <div>
        <Triangle />
        <Toolbar />
      </div>
      <div className="friends-list">
        <div>
          {" "}
          <Friend />
        </div>
        <div>
          {" "}
          <Friend />
        </div>
        <div>
          {" "}
          <Friend />
        </div>
        <div>
          {" "}
          <Friend />
        </div>
        <div>
          {" "}
          <Friend />
        </div>
        <div>
          {" "}
          <Friend />
        </div>
        <div>
          {" "}
          <Friend />
        </div>
        <div>
          {" "}
          <Friend />
        </div>
      </div>
    </div>
  );
}

export default Main;
