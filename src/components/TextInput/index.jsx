import React from "react";
import PropTypes from "prop-types";
import Input from "../../elements/Input";
import Label from "../../elements/Label";

const defaultProps = {
  label: "",
  value: "",
  name: ""
};

const propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string
};

const TextInput = ({ label, value, onChange, name }) => (
  <div>
    <Label htmlFor={label}>{label}:</Label>
    <Input
      id={label}
      type="text"
      value={value}
      onChange={onChange}
      name={name}
    />
  </div>
);

TextInput.defaultProps = defaultProps;
TextInput.propTypes = propTypes;
export default TextInput;
