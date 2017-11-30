import React from "react";
import PropTypes from "prop-types";
import Label from "../../elements/Label";
import Select from "../../elements/Select";

const propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired
};

const SelectField = ({ label, name, options }) => (
  <div>
    <Label>{label}</Label>
    <div>
      <Select name={name} component="select">
        {options.map(option => <option value={option}>{option}</option>)}
      </Select>
    </div>
  </div>
);

SelectField.propTypes = propTypes;
export default SelectField;
