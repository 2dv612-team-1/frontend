import styled from "styled-components";

const Text = styled.p`
  font-size: 16px;
  color: black;
  text-align: ${props => (props.center ? "center" : "left")};
`;

export default Text;
