import React from "react";
import "./friendList.css";
import Toolbar from "../../components/toolbar/toolbar.jsx";
import Friend from "../../components/friend/friend.jsx";
import Triangle from "../../components/triangle/triangle.jsx";

import SearchIcon from "@mui/icons-material/Search";

function FriendList() {
  return (
    <div className="main">
      <h2>Invite Friends</h2>
      <div>
        <Triangle />
        <Toolbar
          render={() => (
            <>
              <input className="searchFriends-input"></input>
              <button>
                <SearchIcon sx={{ fontSize: 12 }} />
              </button>
              <input type="checkbox"></input>
              <div>Select all </div>
              <button className="go">GO</button>
            </>
          )}
        />
      </div>
      <div className="friends-list">
        <Friend />

        <Friend />

        <Friend />

        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
      </div>
    </div>
  );
}

export default FriendList;
