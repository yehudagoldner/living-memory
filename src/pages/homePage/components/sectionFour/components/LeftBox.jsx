import React, { useEffect, useLayoutEffect } from "react";
import "./leftBox.css";
import AddView from "../../reusable/AddView";
import ReadMoreReact from "read-more-react";
import { facebookContentContext } from "../../../../../context/context.provider";

function getVideo(videos) {
  const randIndex = Math.floor(Math.random() * videos.length) - 1;
  const video = videos[randIndex];
  return video && video.video ? video : getVideo(videos);
}

const LeftBox = () => {
  const [data, setData] = React.useContext(facebookContentContext);
  const [post, setPost] = React.useState({ text: "" });

  useLayoutEffect(() => {
    if (!data.posts) return;
    const videos = data.posts.filter((post) => post.type === "video");
    const post = getVideo(videos);
    console.log(post);
    setPost(post);
  }, [data]);
  return (
    post && (
      <div className="leftBox">
        <div className="title4-left">
          <div className="item1-left"></div>
          <h3 className="video-title">A video {data.user.name} has uploaded</h3>
          <div className="item2"></div>
        </div>

        <div className="main-item">
          <video controls="controls" src={post.video}></video>
        </div>

        <AddView textInMemorial={"Videos"} textInBtn={"Add a video"} />
      </div>
    )
  );
};

export default LeftBox;
