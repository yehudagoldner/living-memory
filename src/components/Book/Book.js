import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./Book.css";
import ImageBlend from "../Book/images/some_blend.jpg";

const fetchData = async () => {
  const data = await fetch("http://159.89.46.123:4444/posts");
  const posts = await data.json();
  console.log(posts);
  return posts;
};

const FlipPages = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const posts = await fetchData();
      setData(posts);
      console.log(posts);
    })();
    return () => {};
  }, []);
  fetchData();

  return (
    <>
      {/* <div className="container"> */}
        <div>
          <div className="main-page-container">
            <HTMLFlipBook
              showCover={false}
              width={800}
              height={300}
              //   height={window.screen.height*0.5}
              style={{ margin: "0 auto" }}
            >
              <img className="page-image" src={ImageBlend} alt="" />
              {data.map((item) => (
                <div className="page" key={item.id}>
                  {" "}
                  {item.text}
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default FlipPages;
