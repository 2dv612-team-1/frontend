import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Routes from "../../src/routes";

describe("Routes", () => {
  it("should render correctly", () => {
    const tree = shallow(<Routes />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
