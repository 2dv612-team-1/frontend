import React from "react";
import PropTypes from "prop-types";

const defaultProps = {
  children: "submit"
};

const propTypes = {
  children: PropTypes.string
};

const Button = ({ children }) => <input type="submit" value={children} />;

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default Button;
