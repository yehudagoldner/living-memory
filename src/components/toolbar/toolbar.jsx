import React from "react";
import "./toolbar.css";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SearchIcon from "@mui/icons-material/Search";

function Toolbar() {
  return (
    <div className="toolbar">
      <div className="toolbar-container">
        <div>Invite friends to</div>
        <div>
          <select className="select">
            <option value="">View</option>
            <option value="">Light a candle</option>
            <option value="">Add a photo</option>
            <option value="">Add a video</option>
            <option value="">Add a writing</option>
          </select>
        </div>
        <div>
          <KeyboardArrowRightIcon />
        </div>
        <div>
          <input></input>
          <button>
            <SearchIcon sx={{ fontSize: 12 }} />
          </button>
        </div>
        <input type="checkbox"></input>
        <div>Select all </div>
        <button className="go">GO</button>
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
