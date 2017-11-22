import React from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";
import DropDown from "../Select";
import Button from "../Button";
import Form from "../../elements/Form";

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
  <Form onSubmit={onSubmit}>
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
    <DropDown onChange={onChange} />
    <Button form>Login</Button>
  </Form>
);

LoginForm.propTypes = propTypes;

export default LoginForm;
