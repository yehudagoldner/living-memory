import React, { useState, useEffect } from "react";
import "./scroller.css";

const Scroller = ({ images }) => {
  const [profileImagesArr, setProfileImagesArr] = useState([]);
  useEffect(() => {
    if (images.profileImages) {
      const currentImageArr = JSON.parse(images.profileImages[0].image);

      setProfileImagesArr(currentImageArr);
    }
  }, [images]);

  // console.log(profileImagesArr);
  return (
    <div className="scroller">
      <div className="arrow-left"></div>

      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="arrow-right"></div>
    </div>
  );
};

export default Scroller;
