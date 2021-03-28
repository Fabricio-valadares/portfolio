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
    </BrowserRouter>
    <Global />
  </React.StrictMode>,
  document.getElementById("root")
);
