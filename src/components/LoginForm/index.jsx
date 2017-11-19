import React from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";
import SubmitButton from "../SubmitButton";

const propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  fields: PropTypes.shape({
    username: "",
    password: "",
    role: ""
  }).isRequired
};

const LoginForm = ({ onChange, onSubmit, fields }) => (
  <form onSubmit={onSubmit}>
    <TextInput
      label="username"
      onChange={onChange}
      name="username"
      value={fields.username}
    />
    <TextInput
      label="password"
      onChange={onChange}
      name="password"
      value={fields.password}
    />
    {/* Temporär lösning för login */}
    <select onChange={onChange} name="role">
      <option value="admin">admin</option>
      <option value="representative">representative</option>
      <option value="company">company</option>
    </select>
    <SubmitButton>Login</SubmitButton>
  </form>
);

LoginForm.propTypes = propTypes;

export default LoginForm;
