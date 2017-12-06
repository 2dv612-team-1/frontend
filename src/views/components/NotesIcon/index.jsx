import React from "react";
import Container from "./Container";

const NotesIcon = ({ id, onClick }) => (
  <Container name={id} onClick={onClick}>
    <i className="fa fa-sticky-note-o" aria-hidden="true" />
  </Container>
);

export default NotesIcon;
