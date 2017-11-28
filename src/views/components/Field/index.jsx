import React from "react";
import PropTypes from "prop-types";
import ReduxField from "./Field";
import Label from "../../elements/Label";

const propTypes = {
  label: PropTypes.string.isRequired
};

const Field = ({ label, ...rest }) => (
  <div>
    <Label htmlFor={label}>{label}:</Label>
    <ReduxField id={label} {...rest} />
  </div>
);

Field.propTypes = propTypes;

export default Field;
