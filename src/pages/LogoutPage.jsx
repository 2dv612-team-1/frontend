import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Auth from "../libs/Auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { performLogout } from "../actions/session";

class LogoutPage extends Component {
  state = {
    redirect: false
  };
const propTypes = {
  performLogout: PropTypes.func.isRequired
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

LogoutPage.propTypes = propTypes;
export default connect(null, mapDispatchToProps)(LogoutPage);
