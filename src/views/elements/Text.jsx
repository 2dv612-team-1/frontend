import styled from "styled-components";
import fonts from "../constants/fonts";

const Text = styled.p`
  font-size: 16px;
  color: ${props => (props.error ? "red" : props.success ? "green" : "black")};
  font-family: ${fonts.primary};
  margin-top: 0px;
`;

export default Text;
