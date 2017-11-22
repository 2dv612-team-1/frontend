import React from "react";
import PropTypes from "prop-types";
import OrdinaryButton from "./OrdinaryButton";
import SubmitButton from "./SubmitButton";

const defaultProps = {
  children: "submit",
  form: false
};

const propTypes = {
  children: PropTypes.string,
  form: PropTypes.bool
};

const Button = ({ children, form }) => {
  if (form) {
    return <SubmitButton type="submit" value={children} />;
  }
  return <OrdinaryButton>{children}</OrdinaryButton>;
};

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default Button;
