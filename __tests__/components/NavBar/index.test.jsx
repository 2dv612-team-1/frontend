import React from "react";
import { shallow } from "enzyme";
import NavBar from "../../../src/components/NavBar/";
import Container from "../../../src/components/NavBar/Container";
import MenuItem from "../../../src/components/NavBar/MenuItem";

describe("NavBar", () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<NavBar />);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = undefined;
    wrapper = undefined;
  });

  it("should render", () => {
    const container = Wrapper().find(Container);
    expect(container.length).toBeGreaterThan(0);
  });

  it("should have link to home", () => {
    const text = "home";
    const route = "/";
    const link = Wrapper()
      .find(MenuItem)
      .at(0);

    expect(link.props().children).toBe(text)
    expect(link.props().to).toBe(route)
  });

  it("should have link to login", () => {
    const text = "login";
    const route = "/login";
    const link = Wrapper()
      .find(MenuItem)
      .at(1);

    expect(link.props().children).toBe(text)
    expect(link.props().to).toBe(route)
  });

  it("should have link to register", () => {
    const text = "register";
    const route = "/register";
    const link = Wrapper()
      .find(MenuItem)
      .at(2);

    expect(link.props().children).toBe(text)
    expect(link.props().to).toBe(route)
  });

  it("should have link to companies", () => {
    const text = "companies";
    const route = "/companies";
    const link = Wrapper()
      .find(MenuItem)
      .at(3);

    expect(link.props().children).toBe(text)
    expect(link.props().to).toBe(route)
  });

  it("should have link to representatives", () => {
    const text = "representatives";
    const route = "/representatives";
    const link = Wrapper()
      .find(MenuItem)
      .at(4);

    expect(link.props().children).toBe(text)
    expect(link.props().to).toBe(route)
  });
});
