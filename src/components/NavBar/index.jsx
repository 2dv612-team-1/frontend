import React from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";
import Container from "./Container";

const defaultProps = {
  role: ""
};

const propTypes = {
  role: PropTypes.string
};

const NavBar = ({ role }) => (
  <Container>
    <MenuItem to="/">home</MenuItem>
    <MenuItem to="/login">login</MenuItem>
    {role === "admin" ? (
      <div>
        <MenuItem to="/register/company">register</MenuItem>
        <MenuItem to="/companies">companies</MenuItem>
      </div>
    ) : null}
    {role === "company" ? (
      <div>
        <MenuItem to="/register/representative">register</MenuItem>
        <MenuItem to="/representatives">representatives</MenuItem>
      </div>
    ) : null}
  </Container>
);

NavBar.defaultProps = defaultProps;
NavBar.propTyps = propTypes;

export default NavBar;
