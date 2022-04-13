import React from "react";
import ReactDOM from "react-dom";
import "element-theme-default";
import "./index.less";
import BasicRoute from "./Router";
import configStore from "../src/store/index";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BasicRoute />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
