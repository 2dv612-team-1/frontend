import styled from "styled-components";

const Input = styled.textarea`
  background: yellow;
  border: none;
  width: 100%;
  min-height: 500px;
  resize: none;

  &:focus {
    outline: none;
  }
`;

export default Input;
