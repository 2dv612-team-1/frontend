import React from "react";
import { shallow } from "enzyme";
import SubmitButton from "../../../src/components/SubmitButton/";

describe("SubmitButton", () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<SubmitButton>{props.children}</SubmitButton>);
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

  it("should render a button", () => {
    const input = Wrapper().find("input");
    const inputType = input.props().type;
    expect(inputType).toBe("submit");
  });

  it("should set props.children as value", () => {
    props.children = "Text";
    const input = Wrapper().find("input");
    const inputType = input.props().value;
    expect(inputType).toBe(props.children);
  });
});
