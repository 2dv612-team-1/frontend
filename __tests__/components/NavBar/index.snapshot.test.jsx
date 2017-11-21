import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import NavBar from "../../../src/components/NavBar";

describe("NavBar", () => {
  describe("When not loggedin", () => {
    it("should render correctly", () => {
      const tree = shallow(<NavBar role="" />);
      expect(toJson(tree)).toMatchSnapshot();
    });
  });
  describe("When loggedin as admin", () => {
    it("should render correctly", () => {
      const tree = shallow(<NavBar role="admin" />);
      expect(toJson(tree)).toMatchSnapshot();
    });
  });
  describe("When loggedin as company", () => {
    it("should render correctly", () => {
      const tree = shallow(<NavBar role="company" />);
      expect(toJson(tree)).toMatchSnapshot();
    });
  });
  describe("When loggedin as representative", () => {
    it("should render correctly", () => {
      const tree = shallow(<NavBar role="representative" />);
      expect(toJson(tree)).toMatchSnapshot();
    });
  });
});
