import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

const propTypes = {
  component: PropTypes.node.isRequired,
  access: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
};

/*
const AuthRoute = ({ access, children, role }) => {
  if (role === access) {
    return children;
  }
  return <Redirect to="/" />;
};
*/

const AuthRoute = ({ component: Component, access, role, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      role === access ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = state => ({
  role: state.session.loggedInAs.role
});

AuthRoute.propTypes = propTypes;
export default connect(mapStateToProps)(AuthRoute);
