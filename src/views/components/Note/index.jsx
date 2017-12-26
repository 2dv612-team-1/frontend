import React from "react";
import PropTypes from "prop-types";
import Container from "./Container";
import CloseIcon from "../CloseIcon";
import Input from "./Input";

const defaultProps = {
  children: ""
};

const propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

const Note = ({ onClick, children, onChange }) => (
  <Container>
    <CloseIcon onClick={onClick} />
    <Input value={children} onChange={onChange} />
  </Container>
);

Note.defaultProps = defaultProps;
Note.propTypes = propTypes;
export default Note;
