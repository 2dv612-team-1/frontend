import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Auth from "../libs/Auth";
import { connect } from "react-redux";
import { performLogout } from "../actions/session";

class LogoutPage extends Component {
  state = {
    redirect: false
  };

  componentWillMount() {
    this.props.performLogout();
  }

  render() {
    return this.state.redirect ? <Redirect to="/" /> : null;
  }
}

const mapDispatchToProps = dispatch => ({
  performLogout: () => dispatch(performLogout())
});
export default connect(null, mapDispatchToProps)(LogoutPage);
