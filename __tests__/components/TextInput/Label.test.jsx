import React from "react";
import { shallow } from "enzyme";
import Label from "../../../src/components/TextInput/Label";

describe("Label", () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Label>{props.children}</Label>);
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

  it("should render a label element", () => {
    const label = Wrapper().find("label");
    expect(label.length).toBeGreaterThan(0);
  });

  it("should render a props.children", () => {
    props.children = "A label";
    const label = Wrapper()
      .find("label")
      .text();
    expect(label).toBe(props.children);
  });
});
