import React from "react";
import PropTypes from "prop-types";

const defaultProps = {
  value: ""
};

const propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

const FileInput = ({ onChange, value }) => (
  <div>
    <input type="file" onChange={onChange} value={value} />
  </div>
);

FileInput.defaultProps = defaultProps;
FileInput.propTypes = propTypes;
export default FileInput;
