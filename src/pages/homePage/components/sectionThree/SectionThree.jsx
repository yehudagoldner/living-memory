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
  const [candles, setCandles] = useState([]);
  const [currentCandle, setCurrentCandle] = useState(0);

  let candlesData;
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `${config.API_ENDPOINT}/api/10158842065863652/candles`
      );

      if (data[0]) {
        data[0].active = true;
      }

      window.setInterval(
        () =>
          setCurrentCandle((prev) => {
            return prev === data.length - 1 ? 0 : ++prev;
          }),
        5000
      );
      setCandles(data);
    })();
  }, []);

  useEffect(() => {
    if (!candles.length) return;
    const prev = currentCandle === 0 ? candles.length - 1 : currentCandle - 1;
    candles[prev].active = false;
    if (candles[currentCandle]) {
      candles[currentCandle].active = true;
    } else {
      candles[0].active = true;
    }
  }, [currentCandle]);

  return (
    <div className="sectionThree-container ">
      {candles.map((candle) => (
        <div
          className={`candle icon-${candle.icon} ${
            candle.active ? "active" : ""
          }`}
          id={`candle${candle.id}`}
        >
          <div className="candle-header">
            <i className="icon" />
            <h3>Our memories will last forever</h3>
          </div>

          <p>{candle.text}</p>
          <div className="name-and-data">
            - {candle.name},{" "}
            <Moment format="MM/YYYY">{candle.posted_date}</Moment> -
          </div>
        </div>
      ))}

      <div className="icon-container">{/* <IoIosArrowForward /> */}</div>
      <div className="bottom-sectionThree">
        <Memorial memorial={"Candles"} />
        <View />
        <Button value={"Add a candle"} />
      </div>
    </div>
  );
};

export default SectionThree;
