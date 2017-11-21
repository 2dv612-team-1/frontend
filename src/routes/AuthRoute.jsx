import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Auth from "../libs/Auth";

const defaultProps = {
  role: Auth.getRole()
};

const propTypes = {
  children: PropTypes.element.isRequired,
  access: PropTypes.string.isRequired,
  role: PropTypes.string
};

const AuthRoute = ({ access, children, role }) => {
  if (role === access) {
    return children;
  }
  return <Redirect to="/" />;
};

AuthRoute.defaultProps = defaultProps;
AuthRoute.propTypes = propTypes;
export default AuthRoute;
