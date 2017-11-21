import React from "react";
import { shallow } from "enzyme";
import HomePage from "../../src/pages/HomePage";
import Modal from "../../src/components/Modal";

describe("HomePage", () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<HomePage />);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = undefined;
    wrapper = undefined;
  });

  it("should render", () => {
    const homePage = Wrapper().find(Modal);
    expect(homePage.length).toBeGreaterThan(0);
  });
});
