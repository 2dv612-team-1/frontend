import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  access: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
};

const AuthRoute = ({ access, children, role }) => {
  if (role === access) {
    return children;
  }
  return <Redirect to="/" />;
};

const mapStateToProps = state => ({
  role: state.session.loggedInAs.role
});

AuthRoute.propTypes = propTypes;
export default connect(mapStateToProps)(AuthRoute);
