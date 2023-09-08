import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";

import Home from "./component/home.jsx";

let counter = 0;
const data = () => {
  const four = Math.floor(counter / 10000);
  const three = Math.floor(counter / 1000);
  const two = Math.floor(counter / 100);
  const one = Math.floor(counter / 10);
  counter++;
  ReactDOM.render(
    <Home digitone={one} digittwo={two} digitthree={three} digitfour={four} />,
    document.querySelector("#app")
  );
};
const time = setInterval(data, 100);

export { time, data };
