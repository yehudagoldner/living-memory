import React from "react";
import Triangle from "../../components/triangle/triangle.jsx";
import PeopleIcon from "@mui/icons-material/People";
import File from "../../components/file/file.jsx";
import Save from "../../components/save/save.jsx";
import "./contribute.css";

function Contribute() {
  return (
    <div className="contribute-main">
      <div className="top-wrapper">
        <h2>Contribute</h2>
        <div className="share">
          <div>
            <PeopleIcon />
          </div>
          <div className="invite">Invite Friends to contribute</div>
        </div>
      </div>

      <div>
        <Triangle />
        <div className="contribute-bar">
          <div className="contribute-wrapper">
            <div>Add a</div>
            <div className="custom-select">
              <select className="contribute-select">
                <option value="0">Photo</option>
                <option value="1">Video</option>
                <option value="2">Text</option>
                <option value="3">A Thing he liked</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="file-grid">
        <File />
        <File />
        <File />
        <File />
        <File />
        <File />
      </div>
      <div className="termsOfUse">
        <input type="checkbox"></input>
        <h4>
          I have READ and AGREE to the <a href="#">terms of use.</a>
        </h4>
      </div>
      <Save content="Save and send to confirmation" />
    </div>
  );
}

export default Contribute;
