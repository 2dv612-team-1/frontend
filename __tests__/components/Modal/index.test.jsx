import React from "react";
import { shallow } from "enzyme";
import Modal from "../../../src/components/Modal/";

describe("Modal", () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Modal {...props} />);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = undefined;
    wrapper = undefined;
  });

  it("should render", () => {});
  const div = Wrapper().find("div");
  expect(div.length).toBe(1);
});
