import React from "react";
import MenuItem from "./MenuItem";
import Container from "./Container";

const NavBar = () => (
  <Container>
    <MenuItem to="/">home</MenuItem>
    <MenuItem to="/login">login</MenuItem>
    <MenuItem to="/register/admin">register</MenuItem>
    <MenuItem to="/companies">companies</MenuItem>
    <MenuItem to="/representatives">representatives</MenuItem>
  </Container>
);

export default NavBar;
