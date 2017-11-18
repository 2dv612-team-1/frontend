import React from "react";
import { shallow } from "enzyme";
import TextInput from "../../../src/components/TextInput/";
import Input from "../../../src/components/TextInput/Input";
import Label from "../../../src/components/TextInput/Label";

describe("TextInput", () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<TextInput {...props} />);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = {
      label: undefined,
      value: undefined,
      onChange: undefined,
      name: undefined
    };
    wrapper = undefined;
  });

  it("should render", () => {
    const textInput = Wrapper().find("div");
    expect(textInput.length).toBeGreaterThan(0);
  });

  it("should contain a Input component", () => {
    const input = Wrapper().find(Input);
    expect(input.length).toBeGreaterThan(0);
  });

  it("should contain a Label component", () => {
    const label = Wrapper().find(Label);
    expect(label.length).toBeGreaterThan(0);
  });

  it("props.label should be forwarded to Label component", () => {
    props.label = "A label";
    const label = Wrapper().find(Label);
    expect(label.props().htmlFor).toBe(props.label);
    expect(label.props().children[0]).toBe(props.label);
  });

  it("props.label and props.name should be forwarded to Input component", () => {
    props.label = "A label";
    props.name = "A name";
    props.value = "Some value";
    const input = Wrapper().find(Input);
    expect(input.props().id).toBe(props.label);
    expect(input.props().name).toBe(props.name);
    expect(input.props().value).toBe(props.value);
  });

  describe("user enters input into text field", () => {
    it("should call onChange", () => {
      props.onChange = jest.fn();
      const input = Wrapper().find(Input);
      input.simulate("change");
      expect(props.onChange).toHaveBeenCalled();
    });
  });
});
