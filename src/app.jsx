import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import BasePage from "./views/pages/BasePage";
import configureStore from "./state/store";

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <BasePage />
    </Router>
  </Provider>,
  document.getElementById("app")
);
