import React from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";
import SubmitButton from "../SubmitButton";

const propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
  fields: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    jwt: PropTypes.string.isRequired
  }).isRequired
};

const RegisterForm = ({ role, onChange, onSubmit, fields }) => (
  <form onSubmit={onSubmit}>
    {role === "admin" ? null : (
      <div>
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
      </div>
    )}
    <SubmitButton>Register</SubmitButton>
  </form>
);

RegisterForm.propTypes = propTypes;

export default RegisterForm;
