import React from "react";
import PropTypes from "prop-types";
import Container from "./Container";

const propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

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

NotesIcon.propTypes = propTypes;
export default NotesIcon;
