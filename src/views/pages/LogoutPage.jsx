import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { performLogout } from "../../state/session/actions";

const propTypes = {
  performLogout: PropTypes.func.isRequired
};

class LogoutPage extends Component {
  componentWillMount() {
    this.props.performLogout();
  }

  render() {
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = dispatch => ({
  performLogout: () => dispatch(performLogout())
});

LogoutPage.propTypes = propTypes;
export default connect(null, mapDispatchToProps)(LogoutPage);
