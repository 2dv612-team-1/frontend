import React from "react";
import { shallow } from "enzyme";
import BasePage from "../../src/pages/BasePage";
import Routes from "../../src/routes";
import NavBar from "../../src/components/NavBar";

describe("BasePage", () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<BasePage />);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = undefined;
    wrapper = undefined;
  });

  it("should render", () => {
    const basePage = Wrapper().find("div");
    expect(basePage.length).toBeGreaterThan(0);
  });

  it("should contain a NavBar", () => {
    const basePage = Wrapper().find(NavBar);
    expect(basePage.length).toBeGreaterThan(0);
  });

  it("should contain Routes", () => {
    const basePage = Wrapper().find(Routes);
    expect(basePage.length).toBeGreaterThan(0);
  });
});
