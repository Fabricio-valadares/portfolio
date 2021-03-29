import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/reset.css";
import Global from "./styles/global";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Global />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
