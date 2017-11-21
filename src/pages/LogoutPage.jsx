import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Modal from "../components/Modal";
import Auth from "../libs/Auth";

class LogoutPage extends Component {
  state = {
    redirect: false
  };

  componentDidMount() {
    Auth.removeRole();
    this.setState({ redirect: true });
  }

  render() {
    return (
      this.state.redirect ? <Redirect to="/" /> : null
    );
  }
}

export default LogoutPage;
