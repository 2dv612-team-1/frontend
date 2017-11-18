import React from "react";
import { shallow } from "enzyme";
import Text from "../../../src/components/ErrorMessage/Text";

describe("Text", () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Text>{props.children}</Text>);
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
    const text = Wrapper().find("p");
    expect(text.length).toBeGreaterThan(0);
  });

  it("should render props.children", () => {
    props.children = "Hello World";
    const text = Wrapper()
      .find("p")
      .text();
    expect(text).toBe(props.children);
  });
});
