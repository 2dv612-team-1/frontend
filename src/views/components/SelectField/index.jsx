import React from "react";
import PropTypes from "prop-types";
import Label from "../../elements/Label";
import Select from "../../elements/Select";

const propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired
};

const SelectField = ({ label, name, options, onChange }) => (
  <div>
    <Label>{label}</Label>
    <div>
      <Select name={name} onChange={onChange} component="select">
        <option>Select</option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </div>
  </div>
);

SelectField.propTypes = propTypes;
export default SelectField;
