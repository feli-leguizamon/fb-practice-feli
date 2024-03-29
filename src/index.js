import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "./firebase";
import "bootswatch/dist/superhero/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
