import React, { useEffect, useState, useContext } from "react";
import "./right.css";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import AddView from "../../reusable/AddView";
import { facebookContentContext } from "../../../../../context/context.provider";
import ReadMoreReact from "read-more-react";

function getTextPost(data, type){
  const randIndex = Math.floor(
    Math.random() * (data.posts.filter((post) => post[type]).length - 1)
  );
  let random = data.posts.filter((post) => post[type])[randIndex];
  if(type==='text') console.log(random[type]);
  return random[type] ? random: getTextPost(data, type)
}

const RandomPost = ({ type, header }) => {
  const [data, setData] = useContext(facebookContentContext);

  const [post, setPost] = useState();

  useEffect(() => {
    if (data.posts) {
      const random = getTextPost(data, type)
      if (random[type]) setPost(random);
    }
  }, [data]);
  return !post || !post.text ? (
    ""
  ) : (
    <div className={`random-post-wrapper type-${type}`}>
      <div className="random-post-title">
        <div className="random-post-icon"></div>
        <h3>
          {type === "image"
            ? `Some pictures had been uploaded by ${data.user.name}`
            : `Text had been written by ${data.user.name}`}
        </h3>
      </div>
      <div className="random-post-text">
        {type === "image" ? <img src={post.image} alt="" /> : ""}
        <p>
          <ReadMoreReact
            text={post.text}
            min={0}
            ideal={200}
            max={250}
            readMoreText=""
          />
        </p>
      </div>
    </div>
  );
};

export default RandomPost;
