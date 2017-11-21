import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import "jest-styled-components";
import PageTitle from "../../../src/components/PageTitle";
import colors from "../../../src/constants/colors";

describe("PageTitle", () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<PageTitle {...props}>{props.children}</PageTitle>);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = {
      children: undefined,
      center: undefined
    };
    wrapper = undefined;
  });

  describe("when props are undefined", () => {
    it("Should match snapshot", () => {
      expect(toJson(Wrapper())).toMatchSnapshot();
    });

    it("should not be center", () => {
      const tree = Wrapper();
      expect(tree).toHaveStyleRule("text-align", "left");
    });

    it("should use primary color", () => {
      const tree = Wrapper();
      expect(tree).toHaveStyleRule("color", colors.primary);
    });
  });

  describe("when props are defined", () => {
    it("Should match snapshot", () => {
      props.children = "Text";
      props.center = true;
      expect(toJson(Wrapper())).toMatchSnapshot();
    });

    it("should be center", () => {
      props.children = "Text";
      props.center = true;
      expect(Wrapper()).toHaveStyleRule("text-align", "center");
    });
  });
});
