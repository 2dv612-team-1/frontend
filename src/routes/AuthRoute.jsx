import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Auth from "../libs/Auth";

const propTypes = {
  children: PropTypes.element.isRequired,
  access: PropTypes.string.isRequired
};

const AuthRoute = ({ access, children }) => {
  if (Auth.getRole() === access) {
    return children;
  }
  return <Redirect to="/" />;
};

AuthRoute.propTypes = propTypes;
export default AuthRoute;
