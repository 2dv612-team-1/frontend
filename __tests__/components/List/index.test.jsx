import React from "react";
import { shallow } from "enzyme";
import List from "../../../src/components/List/";

describe("List", () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<List {...props} />);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = {
      list: undefined
    };
    wrapper = undefined;
  });

  it("should render a List component", () => {
    const list = Wrapper().find("ol");
    expect(list.length).toBeGreaterThan(0);
  });

  describe("when props.list is undefined", () => {
    it("should not render list items", () => {
      const listItems = Wrapper()
        .find("ol")
        .children();
      expect(listItems.length).toBe(0);
    });
  });

  describe("when props.list is an array with items", () => {
    it("should render a list", () => {
      props.list = [
        { username: "karl" },
        { username: "john" },
        { username: "doe" },
        { username: "liz" },
        { username: "hindi" }
      ];

      const listItems = Wrapper()
        .find("ol")
        .children();
      expect(listItems.length).toBe(5);
    });
  });
});
