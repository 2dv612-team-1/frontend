import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.string.isRequired
};

const SubmitButton = ({ children }) => <input type="submit" value={children} />;

SubmitButton.propTypes = propTypes;

export default SubmitButton;
