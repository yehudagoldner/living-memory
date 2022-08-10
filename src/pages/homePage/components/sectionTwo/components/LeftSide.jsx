import React from "react";
import "./left.css";
import AddView from "../../reusable/AddView";

const LeftSide = () => {
  return (
    <div className="leftBox-wrapper">
      <div className="leftBox-title">
        <div className="img-left"></div>
        <h3>
          Bryter Layter, the second <br></br> of three albums
        </h3>
      </div>
      <div className="text-left">
        <p>
          "Never sing for my supper, I never help my neighbour, Never do what is
          proper, For my share of labour, I'm a poor boy And I'm a rover, Count
          your coins and Throw them over them over the- Throw them over them
          over the Throw them".{" "}
          <span className="continue">Continue reading > </span>
        </p>
      </div>

      <AddView textInMemorial={"Writings"} textInBtn={"Add a writing"} />
    </div>
  );
};

export default LeftSide;
