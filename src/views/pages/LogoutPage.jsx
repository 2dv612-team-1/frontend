import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { performLogout } from "../../state/session/actions";

const propTypes = {
  logout: PropTypes.func.isRequired
};

const LogoutPage = ({ logout }) => {
  logout();

  return <Redirect to="/" />;
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(performLogout())
});

LogoutPage.propTypes = propTypes;
export default connect(null, mapDispatchToProps)(LogoutPage);
