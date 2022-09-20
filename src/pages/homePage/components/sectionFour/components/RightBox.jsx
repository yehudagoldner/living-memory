import React from "react";
import "./rightBox.css";
import AddView from "../../reusable/AddView";
import { facebookContentContext } from "../../../../../context/context.provider";
const RightBox = () => {
  const [data, setData] = React.useContext(facebookContentContext);

  return (
    data.pagesLiked && (
      <div className="rightBox-wrapper4">
        <div className="title4">
          <div className="item1"></div>
          <div className="item2">
            <h3> {data.user.name} liked</h3>
          </div>
        </div>
        <div className="rightBox">
          {data.pagesLiked.slice(0, 8).map((page) => {
            const image = JSON.parse(page.image);
            return (
              <div className="item-liked">
                <img src={image.url} title={page.name} alt={page.name} />
              </div>
            );
          })}
        </div>
        <div className="rightBox-bottom4">
          <AddView
            textInMemorial={"things he liked"}
            textInBtn={"Add a thing he liked"}
          />
        </div>
      </div>
    )
  );
};

export default RightBox;
