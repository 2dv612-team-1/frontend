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
    {role === "admin" ? (
      <div>
        <MenuItem to="/register/company">register</MenuItem>
        <MenuItem to="/companies">companies</MenuItem>
        <MenuItem to="/logout">logout</MenuItem>
      </div>
    ) : (
      <div>
        <MenuItem to="/login">login</MenuItem>
      </div>
    )}
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
