import React from "react";
import "./right.css";
import Button from "../../reusable/Button";
import Memorial from "../../reusable/Memorial";
import View from "../../reusable/View";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const RightSide = () => {
  return (
    <div className="rightSide">
      <div className="container-right">
        <div className="title-right">
          <div className="img-right"></div>
          <h3>
            6 years old on his way to <br></br> his first day at school
          </h3>
        </div>
        <div className="text-right">
          <img src="Picture-section2.png" alt="" />
          <p>
            photo description: date, place, whos in it and more. Photo
            de-scription: date, place, whos in it and more.{" "}
          </p>
        </div>
      </div>
      <div className="bottom-right">
        <Memorial memorial={"Photos"} />
        <View />
        {/* <Button value={"Add a photo"} /> */}
        {/* <Popup
          trigger={
            <button className="unvisible-button">
              <Button value={"Add a photo"} />
            </button>
          }
          position=" center"
        >
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            odio sed error dolores illo qui repellendus, iusto at similique
            omnis aliquam maxime, reprehenderit earum commodi animi quam rerum,
            odit dolor?{" "}
          </div>
        </Popup> */}
      </div>
    </div>
  );
};

export default RightSide;
