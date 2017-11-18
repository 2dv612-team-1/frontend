import React from "react";
import { shallow } from "enzyme";
import { Route } from "react-router-dom";
import Routes from "../../src/routes/";

describe("Routes", () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Routes />);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = undefined;
    wrapper = undefined;
  });

  it("should render a Route component", () => {
    const routes = Wrapper().find("div");
    expect(routes.length).toBeGreaterThan(0);
  });

  it("should have route for home", () => {
    const route = Wrapper()
      .find(Route)
      .at(0)
      .props().path;
    expect(route).toBe("/");
  });

  it("should have route for login", () => {
    const route = Wrapper()
      .find(Route)
      .at(1)
      .props().path;
    expect(route).toBe("/login");
  });
  it("should have route for register", () => {
    const route = Wrapper()
      .find(Route)
      .at(2)
      .props().path;
    expect(route).toMatch("/register");
  });
  it("should have route for companies", () => {
    const route = Wrapper()
      .find(Route)
      .at(3)
      .props().path;
    expect(route).toBe("/companies");
  });
  it("should have route for representatives", () => {
    const route = Wrapper()
      .find(Route)
      .at(4)
      .props().path;
    expect(route).toBe("/representatives");
  });
});
