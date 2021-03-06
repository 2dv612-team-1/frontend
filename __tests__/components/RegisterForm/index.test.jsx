import React from "react";
import { shallow } from "enzyme";
import RegisterForm from "../../../src/components/RegisterForm/";
import TextInput from "../../../src/components/TextInput/";
import SubmitButton from "../../../src/components/SubmitButton/";

describe("RegisterForm", () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<RegisterForm {...props} />);
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
    const registerForm = Wrapper();
    expect(registerForm).toBeDefined();
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

  describe("A admin is browsing the page", () => {
    it("should not show input fields", () => {
      props.role = "admin";
      const input = Wrapper().find(TextInput);
      expect(input.length).toBe(0);
    });
  });

  describe("A company is browsing the page", () => {
    it("should not show input fields", () => {
      props.role = "company";
      const input = Wrapper().find(TextInput);
      expect(input.length).toBeGreaterThan(0);
    });
  });

  describe("A representative is browsing the page", () => {
    it("should not show input fields", () => {
      props.role = "representative";
      const input = Wrapper().find(TextInput);
      expect(input.length).toBeGreaterThan(0);
    });
  });

  describe("Company/Representative fillouts the form ", () => {
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

    describe("Company/Representative submits the form ", () => {
      it("should call onSubmit", () => {
        props.onSubmit = jest.fn();
        const form = Wrapper().find("form");
        form.simulate("submit");

        expect(props.onSubmit).toHaveBeenCalled();
      });
    });
  });
});
