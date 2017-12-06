import React from "react";
import Container from "./Container";

const CloseIcon = ({ onClick }) => (
  <Container onClick={onClick}>
    <i className="fa fa-times-circle" aria-hidden="true" />
  </Container>
);

export default CloseIcon;
