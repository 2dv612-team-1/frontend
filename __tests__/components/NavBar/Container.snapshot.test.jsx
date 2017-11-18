import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import "jest-styled-components";
import Container from "../../../src/components/NavBar/Container";
import colors from "../../../src/constants/colors";

describe("Container", () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Container {...props}>{props.children}</Container>);
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

  describe("when props are undefined", () => {
    it("Should match snapshot", () => {
      expect(toJson(Wrapper())).toMatchSnapshot();
    });

    it("should should use primary color", () => {
      const tree = Wrapper();
      expect(tree).toHaveStyleRule("background", colors.primary);
    });
  });
});
