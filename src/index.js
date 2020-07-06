import React from "react";
import ReactDOM from "react-dom";

import "./global.css";
// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.css";

// import Badges from "./components/Badge";
import BadgeNew from "./pages/BadgeNew";

const container = document.getElementById("app");

// ReactDOM.render(element, container);
ReactDOM.render(
  <BadgeNew  />,
  container
);
