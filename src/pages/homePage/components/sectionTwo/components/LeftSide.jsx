import React from "react";
import "./left.css";
import Button from "../../reusable/Button";
import Memorial from "../../reusable/Memorial";
import View from "../../reusable/View";

const LeftSide = () => {
  return (
    <div className="leftSide">
      <div className="container-left">
        <div className="title-left">
          <div className="img-left"></div>
          <h3>
            Bryter Layter, the second <br></br> of three albums
          </h3>
        </div>

        <p>
          "Never sing for my supper, I never help my neighbour, Never do what is
          proper, For my share of labour, I'm a poor boy And I'm a rover, Count
          your coins and Throw them over them over the- Throw them over them
          over the Throw them"
        </p>
        <div className="continue">Continue reading > </div>
      </div>
      <div className="bottom">
        <Memorial memorial={"Writings"} />
        <View />
        <Button value={"Add a writing"} />
      </div>
    </div>
  );
};

export default LeftSide;
