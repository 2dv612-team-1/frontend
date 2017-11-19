import React from "react";
import { mount } from "enzyme";
import CompaniesPage from "../../src/pages/CompaniesPage";
import Modal from "../../src/components/Modal";
import { BrowserRouter as Router } from "react-router-dom";
import Client from "../../src/libs/Client";

jest.mock("../../src/libs/Client");

describe("CompaniesPage", () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = mount(
        <Router>
          <CompaniesPage />
        </Router>
      );
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = undefined;
    wrapper = undefined;
  });

  it("should render", () => {
    const modal = Wrapper().find(Modal);
    expect(modal.length).toBeGreaterThan(0);
  });

  describe("Component is mounted", () => {
    let GET;
    beforeEach(() => {
      GET = jest.spyOn(Client, "GET");
      wrapper = Wrapper();
    });

    it("should call Client.GET", () => {
      expect(GET).toHaveBeenCalled();
    });
  });
});
