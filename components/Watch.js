// ref: https://codeburst.io/reacts-render-props-technique-in-3-minutes-462862bf462e

import React, { useState, useEffect } from "react";
import moment from "moment";

const COLORS = [
  "#FCA17D",
  "#F9DBBD",
  "#DA627D",
  "#9A348E",
  "#0D0628",
  "#8DA1B9",
  "#EF959C"
];

const Strap = ({ children }) => {
  const strapWidth = 45;
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    width: strapWidth,

    overflow: "visible",
    backgroundColor: "lightgrey"
  };

  return <div style={style}>{children}</div>;
};

const Bezel = ({ children }) => {
  const style = {
    padding: 8,
    borderRadius: 10,
    backgroundColor: "salmon"
  };
  return <div style={style}>{children}</div>;
};

const Screen = ({ children }) => {
  const style = {
    padding: 1,
    backgroundColor: "whitesmoke"
  };
  return <div style={style}>{children}</div>;
};

const Face = ({ children }) => {
  let currentCol;

  const randomColor = () => {
    const ind = Math.random() * COLORS.length;
    const newCol = COLORS[parseInt(ind, 10)];

    return currentCol !== newCol ? newCol : randomColor();
  };

  const style = {
    backgroundColor: randomColor(),
    padding: 10
  };
  return <div style={style}>{children}</div>;
};

const Value = ({ children }) => {
  const style = {
    fontSize: 20,
    color: "white"
  };
  return <div style={style}>{children}</div>;
};

const Watch = () => {
  const [date, setDate] = useState(moment());

  useEffect(() => {
    let timer = setInterval(() => {
      setDate(moment());
      //setMounted(!mounted); // toggle between true and false
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <Strap>
      <Bezel>
        <Screen>
          <Face>
            <Value>{date.format("HH")}</Value>
            <Value>{date.format("mm")}</Value>
          </Face>
        </Screen>
      </Bezel>
    </Strap>
  );
};

export default Watch;
