import React from "react";
import PropTypes from "prop-types";
import ReduxField from "./Field";
import Label from "../../elements/Label";
import FieldWrapper from "./FieldWrapper";

const propTypes = {
  label: PropTypes.string.isRequired
};

const Field = ({ label, ...rest }) => (
  <FieldWrapper>
    <Label htmlFor={label}>{label}</Label>
    <ReduxField id={label} {...rest} />
  </FieldWrapper>
);

Field.propTypes = propTypes;

export default Field;
