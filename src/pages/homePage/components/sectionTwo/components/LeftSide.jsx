import React, { useEffect, useState, useContext } from "react";

import "./left.css";
import AddView from "../../reusable/AddView";
import { facebookContentContext } from "../../../../../context/context.provider";

const LeftSide = () => {
  const [data, setData] = useContext(facebookContentContext);

  const [post, setPost] = useState(
    "Never sing for my supper, I never help my neighbour, Never do what is proper, For my share of labour, I'm a poor boy And I'm a rover, Count your coins and Throw them over them over the- Throw them over them over the Throw them."
  );

  useEffect(() => {
    if (data.posts) {
      let randomIndex =
        data.posts[Math.floor(Math.random() * data.posts.length)];
      const currentPost = randomIndex.text;
      setPost(currentPost);
    }
  }, [data]);

  return (
    <div className="leftBox-wrapper">
      <div className="leftBox-title">
        <div className="img-left"></div>
        <h3>Some things he wroth </h3>
      </div>
      <div className="text-left">
        <p>
          {post}
          <span className="continue">Continue reading {">"} </span>
        </p>
      </div>
    </div>
  );
};

export default LeftSide;
