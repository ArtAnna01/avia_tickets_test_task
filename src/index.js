import React from "react";
import moment from "moment";
import "moment/locale/ru";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

moment.locale("ru");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
