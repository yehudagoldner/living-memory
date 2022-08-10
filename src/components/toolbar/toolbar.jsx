import React from "react";
import "./toolbar.css";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";

function Toolbar({ render }) {
  const [friendInput, setfriendInput] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setfriendInput(e.target.value);
  };

  return (
    <div className="toolbar">
      <div className="toolbar-container">
        <div>Invite friends to</div>
        <div className="custom-select">
          <select className="select">
            <option value="0">View</option>
            <option value="1">Light a candle</option>
            <option value="2">Add a photo</option>
            <option value="3">Add a video</option>
            <option value="4">Add a writing</option>
          </select>
        </div>
        <div>
          <KeyboardArrowRightIcon />
        </div>
        <div style={{ display: "flex" }}>{render()}</div>
      </div>
    </div>
  );
}

export default Toolbar;

{
  /* <Select label="View">
            <MenuItem value={10}>View</MenuItem>
            <MenuItem value={20}>Light a candle</MenuItem>
            <MenuItem value={30}>Add a photo</MenuItem>
            <MenuItem value={30}>Add a video</MenuItem>
            <MenuItem value={30}>Add a writing</MenuItem>
          </Select> */
}
