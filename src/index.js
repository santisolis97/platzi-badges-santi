import React from "react";
import ReactDOM from "react-dom";

import "./global.css";
// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.css";

// import BadgeNew from "./pages/BadgeNew";
// import Badges from "./pages/Badges"
import App from "./components/App"


const container = document.getElementById("app");

// ReactDOM.render(element, container);
ReactDOM.render(
  <App  />,
  container
);
