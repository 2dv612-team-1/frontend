import React, { Component } from "react";
import Routes from "../routes/";
import NavBar from "../components/NavBar";
import Auth from "../libs/Auth";
import Jwt from "../libs/Jwt";

class BasePage extends Component {
  state = {
    role: Auth.isUserAuthenticated() ? Jwt.getRole(Auth.getToken()) : ""
  };

  render() {
    return (
      <div>
        <NavBar role={this.state.role} />
        <Routes role={this.state.role} />
      </div>
    );
  }
}

export default BasePage;
