import React from "react";
import PropTypes from "prop-types";
import Container from "./Container";

const propTypes = {
  onClick: PropTypes.func.isRequired
};

const CloseIcon = ({ onClick }) => (
  <Container onClick={onClick}>
    <i className="fa fa-times-circle" aria-hidden="true" />
  </Container>
);

CloseIcon.propTypes = propTypes;
export default CloseIcon;
