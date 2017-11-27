import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Auth from "../../libs/Auth";
import Jwt from "../../libs/Jwt";

const defaultProps = {
  role: Auth.isUserAuthenticated() ? Jwt.getRole(Auth.getToken()) : ""
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
