import React from 'react';
import MenuItem from './MenuItem';
import Container from './Container';


const NavBar = () => (
  <Container>
    <MenuItem to="/">Home</MenuItem>
    <MenuItem to="/login">Login</MenuItem>
    <MenuItem to="/register">Register</MenuItem>
  </Container>
);

export default NavBar;
