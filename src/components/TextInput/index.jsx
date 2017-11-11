import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Label from './Label';

const propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

const TextInput = ({
  label, value, onChange, name,
}) => (
  <div>
    <Label htmlFor={label}>{label}:</Label>
    <Input id={label} type="text" value={value} onChange={onChange} name={name} />
  </div>
);

TextInput.propTypes = propTypes;

export default TextInput;
