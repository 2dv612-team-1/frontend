import React from "react";
import { shallow } from "enzyme";
import Input from "../../src/elements/Input";

describe("Input", () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Input>{props.children}</Input>);
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

  it("should render a input element", () => {
    const input = Wrapper().find("input");
    expect(input.length).toBeGreaterThan(0);
  });
});
