import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { performLogout } from "../actions/session";

const propTypes = {
  performLogout: PropTypes.func.isRequired
};

class LogoutPage extends Component {
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
