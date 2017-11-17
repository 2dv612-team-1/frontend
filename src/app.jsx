import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import BasePage from "./pages/BasePage";

render(
  <Router>
    <BasePage />
  </Router>,
  document.getElementById("app")
);
