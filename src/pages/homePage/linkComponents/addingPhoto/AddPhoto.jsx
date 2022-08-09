import React from "react";
import Toolbar from "../../../../components/toolbar/toolbar";
import Buttonrectangle from "../../components/reusable/Buttonrectangle";
import "./addPhoto.css";
import ToolbarPhoto from "./components/ToolbarPhoto";

const AddPhoto = () => {
  const photos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="addingPhoto-page">
      <div className="navbar-photos">
        <form className="years-form" action="">
          <label for="years">Years</label>
          <select name="years" id="years">
            <option value="All">All</option>
            <option value="1973-1974">1973-1974</option>
            <option value="1970-1972">1970-1972</option>
            <option value="1969">1969</option>
            <option value="1964-1968">1964-1968</option>
            <option value="1959-1964">1959-1964</option>
            <option value="1957-1958">1957-1958</option>
            <option value="1949-1955">1949-1955</option>
            <option value="1956-1957">1956-1957</option>
          </select>

          <input type="submit" value="Submit" />
        </form>
        <ul className="navbar-right">
          <li>All</li>
          <li>Photos</li>
          <li>Videos</li>
          <li>What he wrote</li>
          <li>Categories</li>
        </ul>
      </div>
      <br></br>
      <div className="buttons">
        <Buttonrectangle content={"Add a photo"} />
        <Buttonrectangle content={"Invite friends to add a photo"} />
      </div>
      <ToolbarPhoto />
      <div className="photos-box">
        {photos.map((photo) => {
          return <div className="photo-box">{photo}</div>;
        })}
      </div>
    </div>
  );
};

export default AddPhoto;
