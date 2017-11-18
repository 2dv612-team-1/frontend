import React from "react";
import PropTypes from "prop-types";

const defaultProps = {
  children: "submit"
};

const propTypes = {
  children: PropTypes.string
};

const SubmitButton = ({ children }) => <input type="submit" value={children} />;

SubmitButton.defaultProps = defaultProps;
SubmitButton.propTypes = propTypes;

export default SubmitButton;
