import React, { useEffect, useState, useContext } from "react";
import "./right.css";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import AddView from "../../reusable/AddView";
import { facebookContentContext } from "../../../../../context/context.provider";

const RightSide = () => {
  const [data, setData] = useContext(facebookContentContext);

  const [image, setImage] = useState(
    "https://media.istockphoto.com/photos/burning-candle-on-black-table-memory-day-picture-id1314494173?k=20&m=1314494173&s=612x612&w=0&h=Ec3ZPR483Chr5GpEoo85wjGJbF5z5D4cC1v4wgbQO-A="
  );
  const [post, setPost] = useState(
    "Never sing for my supper, I never help my neighbour, Never do what is proper, For my share of labour, I'm a poor boy And I'm a rover, Count your coins and Throw them over them over the- Throw them over them over the Throw them."
  );

  useEffect(() => {
    if (data.posts) {
      let randomIndex =
        data.posts[Math.floor(Math.random() * data.posts.length)];
      const currentImage = randomIndex.image;
      setImage(currentImage);
      console.log("currentImage", currentImage);
    }
  }, [data]);
  useEffect(() => {
    if (data.posts) {
      let randomIndex =
        data.posts[Math.floor(Math.random() * data.posts.length)];
      const currentPost = randomIndex.text;
      setPost(currentPost);
    }
  }, [data]);

  return (
    <div className="rightBox-wrapper">
      <div className="title-right">
        <div className="img-right"></div>
        <h3>Some pictures he took</h3>
      </div>
      <div className="text-right">
        <img src={image} alt="" />
        <p>{post}</p>
      </div>
    </div>
  );
};

export default RightSide;
