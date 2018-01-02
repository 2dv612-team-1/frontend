import styled from "styled-components";
import fonts from "../../constants/fonts";
import colors from "../../constants/colors";

const Anchor = styled.a`
  cursor: pointer;
  line-height:30px;
  text-decoration: none;
  font-family: ${fonts.primary};
  color: ${colors.primary};
  &:hover {
    text-decoration: underline;
  }
  flex-basis: 50%;
`;

export default Anchor;
