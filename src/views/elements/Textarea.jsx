import styled from "styled-components";
import fonts from "../constants/fonts";

const Textarea = styled.textarea`
  display: block;
  margin: 0 auto;
  width: 300px;
  height: 240px;
  text-align: left;
  font-family: ${fonts.secondary};
  letter-spacing: 0.1em;
  font-size: 1em;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export default Textarea;
