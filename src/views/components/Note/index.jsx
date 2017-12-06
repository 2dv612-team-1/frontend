import React from "react";
import Container from "./Container";
import CloseIcon from "../CloseIcon";
import Input from "./Input";

const Note = ({ onClick, children, onChange }) => (
  <Container>
    <CloseIcon onClick={onClick} />
    <Input value={children} onChange={onChange} />
  </Container>
);

export default Note;
