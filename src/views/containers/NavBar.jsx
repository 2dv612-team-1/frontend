import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MenuItem from "../components/MenuItem";
import FlexBox from "../components/FlexBox";

const defaultProps = {
  role: ""
};

const propTypes = {
  role: PropTypes.string
};

const NavBar = ({ role }) => (
  <FlexBox>
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
        <MenuItem to="/categories">Categories</MenuItem>
        <MenuItem to="/companies">Companies</MenuItem>
        <MenuItem to="/logout">Logout</MenuItem>
      </div>
    ) : null}
    {role === "company" ? (
      <div>
        <MenuItem to="/representatives">Representatives</MenuItem>
        <MenuItem to="/logout">Logout</MenuItem>
      </div>
    ) : null}
    {role === "representative" ? (
      <div>
        <MenuItem to="/products">Products</MenuItem>
        <MenuItem to="/logout">Logout</MenuItem>
        <MenuItem to="/forum">Forum</MenuItem>
      </div>
    ) : null}
    {role === "consumer" ? (
      <div>
        <MenuItem to="/products">Products</MenuItem>
        <MenuItem to="/forum">Forum</MenuItem>
        <MenuItem to="/thread/new">New</MenuItem>
        <MenuItem to="/logout">Logout</MenuItem>
      </div>
    ) : null}
  </FlexBox>
);

const mapStateToProps = state => ({
  role: state.session.loggedInAs.role
});

NavBar.defaultProps = defaultProps;
NavBar.propTypes = propTypes;
export default connect(mapStateToProps)(NavBar);
