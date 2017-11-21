import React from "react";
import { shallow } from "enzyme";
import ErrorMessage from "../../../src/components/ErrorMessage/";
import Text from "../../../src/elements/Text";

describe("ErrorMessage", () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<ErrorMessage>{props.children}</ErrorMessage>);
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

  it("should render a Text component", () => {
    const text = Wrapper().find(Text);
    expect(text.length).toBeGreaterThan(0);
  });

  describe("when props.children is undefined", () => {
    it("should not render text", () => {
      const text = Wrapper()
        .find(Text)
        .props().children;
      expect(text).toBe("");
    });
  });

  describe("when props.children is defined", () => {
    it("should render text", () => {
      props.children = "Hello World";
      const text = Wrapper()
        .find(Text)
        .props().children;
      expect(text).toBe(props.children);
    });
  });
});
