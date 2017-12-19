import styled from "styled-components";
import fonts from "../../constants/fonts";
import colors from "../../constants/colors";


const MyUl = styled.ul`
  list-style-type: none;
  font-size: 16px;
  text-transform: capitalize;
  font-family: ${fonts.secondary};
  color: ${colors.sublist};
  list-style-position: inside;
  padding: 0;
  margin-left: 60px;
`;

export default MyUl;
