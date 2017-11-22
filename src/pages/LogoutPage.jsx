import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Auth from "../libs/Auth";

class LogoutPage extends Component {
  state = {
    redirect: false
  };

  componentWillMount() {
    Auth.removeRole();
    Auth.deauthenticateUser();
    this.setState({ redirect: true });
  }

  componentDidMount() {
    location.reload();
  }

  render() {
    return this.state.redirect ? <Redirect to="/" /> : null;
  }
}

export default LogoutPage;
