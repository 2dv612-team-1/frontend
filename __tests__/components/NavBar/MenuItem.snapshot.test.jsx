import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { BrowserRouter as Router } from "react-router-dom";
import "jest-styled-components";
import MenuItem from "../../../src/components/NavBar/MenuItem";

describe("MenuItem", () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(
        <Router>
          <MenuItem {...props}>{props.children}</MenuItem>
        </Router>
      );
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = {
      children: undefined
    };
    wrapper = undefined;
  });

  describe("when props are undefined", () => {
    it("Should match snapshot", () => {
      expect(toJson(Wrapper())).toMatchSnapshot();
    });
  });

  describe("when props are defined", () => {
    it("Should match snapshot", () => {
      props.children = "Text";
      expect(toJson(Wrapper())).toMatchSnapshot();
    });
  });
});
