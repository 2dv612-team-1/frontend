import React from "react";
import { shallow } from "enzyme";
import LoginForm from "../../../src/components/LoginForm/";
import TextInput from "../../../src/components/TextInput/";
import SubmitButton from "../../../src/components/SubmitButton/";

describe("LoginForm", () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<LoginForm {...props} />);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = {
      onChange: undefined,
      onSubmit: undefined,
      fields: {}
    };
    wrapper = undefined;
  });

  it("should be defined", () => {
    const loginForm = Wrapper();
    expect(loginForm).toBeDefined();
  });

  it("should render", () => {
    const form = Wrapper().find("form");
    expect(form.length).toBeGreaterThan(0);
  });

  it("should render a SubmitButton", () => {
    const button = Wrapper().find(SubmitButton);
    expect(button.length).toBe(1);
  });

  it("Should Render TextInput", () => {
    const button = Wrapper().find(TextInput);
    expect(button.length).toBe(2);
  });

  it("should pass props.fields.password to TextInput", () => {
    props.fields.password = "a password";
    const input = Wrapper()
      .find(TextInput)
      .at(1);

    expect(input.props().value).toBe(props.fields.password);
  });

  it("should pass props.fields.username to TextInput", () => {
    props.fields.username = "a username";
    const input = Wrapper()
      .find(TextInput)
      .at(0);

    expect(input.props().value).toBe(props.fields.username);
  });

  describe("User fillouts the form ", () => {
    it("should call onChange method on username form", () => {
      props.onChange = jest.fn();
      const input = Wrapper()
        .find(TextInput)
        .first();
      input.simulate("change");

      expect(props.onChange).toHaveBeenCalled();
    });

    it("should call onChange method on password form", () => {
      props.onChange = jest.fn();
      const input = Wrapper()
        .find(TextInput)
        .last();
      input.simulate("change");

      expect(props.onChange).toHaveBeenCalled();
    });

    describe("User submits the form ", () => {
      it("should call onSubmit", () => {
        props.onSubmit = jest.fn();
        const form = Wrapper().find("form");
        form.simulate("submit");

        expect(props.onSubmit).toHaveBeenCalled();
      });
    });
  });
});
