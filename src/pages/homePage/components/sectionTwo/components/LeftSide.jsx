import React, { useEffect, useState, useContext } from "react";

import "./left.css";
import { facebookContentContext } from "../../../../../context/context.provider";
import ReadMoreReact from 'read-more-react';

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

  return !post && (
    <div className="leftBox-wrapper">
      <div className="leftBox-title">
        <div className="img-left"></div>
        <h3>Some things he wroth </h3>
      </div>
      <div className="text-left">
        <p>
        <ReadMoreReact
            text={post}
            min={0}
            ideal={200}
            max={250}
            readMoreText=""
          />
          <span className="continue">Continue reading {">"} </span>
        </p>
      </div>
    </div>
  );
};

export default LeftSide;
