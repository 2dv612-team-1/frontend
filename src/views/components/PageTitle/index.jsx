import styled from "styled-components";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.primary};
  font-family: ${fonts.secondary};
  text-align: ${props => (props.center ? "center" : "left")};
  text-transform: capitalize;
`;

export default PageTitle;
