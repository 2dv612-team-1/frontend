import React from "react";
import { shallow } from "enzyme";
import { Redirect } from "react-router-dom";
import AuthRoute from "../../src/routes/AuthRoute";

describe("AuthRoute", () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<AuthRoute {...props}>{props.children}</AuthRoute>);
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

  describe("When role match access", () => {
    it("should render children", () => {
      props.children = "child";
      props.role = "admin";
      props.access = "admin";
      expect(Wrapper().text()).toBe(props.children);
    });
  });
  describe("When role does not match access", () => {
    it("should render redirect", () => {
      props.role = "user";
      props.access = "admin";
      const redirect = Wrapper().find(Redirect);
      expect(redirect.length).toBeGreaterThan(0);
    });
  });
});
