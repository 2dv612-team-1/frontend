import React from "react";
import { shallow } from "enzyme";
import NavBar from "../../../src/components/NavBar/";
import Container from "../../../src/components/NavBar/Container";

describe("NavBar", () => {
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
});
