import React, { Component } from "react";
import Routes from "../routes/";
import NavBar from "../components/NavBar";
import Auth from "../libs/Auth";

class BasePage extends Component {
  state = {
    role: Auth.getRole()
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
