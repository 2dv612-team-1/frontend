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
    {role === "" ? (
      <div>
        <MenuItem to="/register/customer">Register</MenuItem>
        <MenuItem to="/login">Login</MenuItem>
        <MenuItem to="/adm">Admin</MenuItem>
      </div>
    ) : null}
    {role === "admin" ? (
      <div>
        <MenuItem to="/register/company">Register</MenuItem>
        <MenuItem to="/companies">Companies</MenuItem>
        <MenuItem to="/logout">Logout</MenuItem>
      </div>
    ) : null}
    {role === "company" ? (
      <div>
        <MenuItem to="/register/representative">Register</MenuItem>
        <MenuItem to="/representatives">Representatives</MenuItem>
        <MenuItem to="/logout">Logout</MenuItem>
      </div>
    ) : null}
    {role === "representative" ? (
      <div>
        <MenuItem to="/products">Products</MenuItem>
        <MenuItem to="/logout">Logout</MenuItem>
      </div>
    ) : null}
    {role === "consumer" ? (
      <div>
        <MenuItem to="/products">Products</MenuItem>
        <MenuItem to="/logout">Logout</MenuItem>
      </div>
    ) : null}
  </Container>
);

NavBar.defaultProps = defaultProps;
NavBar.propTypes = propTypes;

export default NavBar;
