import React, { useContext, useEffect, useState } from "react";
import Button from "../reusable/Button";
import "./sectionThree.css";
import { IoIosArrowForward } from "react-icons/io";
import Memorial from "../reusable/Memorial";
import View from "../reusable/View";
import axios from "axios";
import config from "../../../../config";
import Moment from "react-moment";

const SectionThree = ({ userid }) => {
  const [data, setData] = useState([]);

  let candlesData;
  useEffect(() => {
    (async () => {
      candlesData = await axios.get(
        `${config.API_ENDPOINT}/api/10158842065863652/candles`
      );
      console.log("candlesData", candlesData);

      candlesData.data[0].active = true;
      setData(candlesData.data);
      // setTimeout(() => {
      //   for (let i = 0; i < candlesData.data.length; i++) {
      //     if ((candlesData.data[i].active = true)) {
      //       candlesData.data[i].active = false;
      //       candlesData.data[i + 1].active = true;
      //     }
      //     i++;
      //   }
      // }, 1000);
    })();
  }, []);
  console.log("candlesData2 data dtat", data);

  setTimeout(() => {
    for (let i = 0; i < data.length; i++) {
      if ((data[i].active = true)) {
        data[i].active = false;
        data[i + 1].active = true;
      }
      i++;
    }
  }, 1000);

  return (
    <div className="sectionThree-container">
      <h3>
        <div className="img-title">{/* <img src= */}</div>
        We will never ever forget you!
      </h3>

      {data.map((candle) => (
        <div
          className={`candle ${candle.active ? "active" : ""}`}
          id={`candle${candle.id}`}
        >
          <p>{candle.text}</p>
          <div>
            - {candle.name},{" "}
            <Moment format="MM/YYYY">{candle.posted_date}</Moment> -
          </div>
        </div>
      ))}

      <div className="icon-container">
        <IoIosArrowForward />
      </div>
      <div className="bottom-sectionThree">
        <Memorial memorial={"Candles"} />
        <View />
        <Button value={"Add a candle"} />
      </div>
    </div>
  );
};

export default SectionThree;
