import React from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";
import Button from "../Button";
import Form from "../../elements/Form";

const defaultProps = {
  role: "",
  fields: PropTypes.shape({
    username: "",
    password: "",
    jwt: ""
  })
};

const propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  role: PropTypes.string,
  fields: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
    jwt: PropTypes.string
  })
};

const RegisterForm = ({ role, onChange, onSubmit, fields }) => (
  <Form onSubmit={onSubmit}>
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
    <Button>Register</Button>
  </Form>
);

RegisterForm.defaultProps = defaultProps;
RegisterForm.propTypes = propTypes;
export default RegisterForm;
