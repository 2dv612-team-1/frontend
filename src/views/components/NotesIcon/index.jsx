import React from "react";
import Container from "./Container";

const NotesIcon = ({ id, onClick }) => (
  <Container>
    <i
      name={id}
      onClick={onClick}
      className="fa fa-sticky-note-o"
      aria-hidden="true"
    />
  </Container>
);

export default NotesIcon;
