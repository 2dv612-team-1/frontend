import styled from "styled-components";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

const SubmitButton = styled.input`
  font-family: ${fonts.primary};
  color: ${colors.primary};
  background: none;
  border: solid 2px ${colors.primary};
  text-transform: capitalize;
  width: 300px;
  border-radius: 5px;
  font-size: 18px;
  padding: 0;
  height: 40px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export default SubmitButton;
