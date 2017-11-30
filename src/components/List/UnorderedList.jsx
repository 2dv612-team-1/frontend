import styled from "styled-components";
import fonts from "../../constants/fonts";

const UnorderedList = styled.ul`
  font-size: 16px;
  text-transform: capitalize;
  font-family: ${fonts.secondary};
  list-style-position: inside;
  padding: 0;
`;

export default UnorderedList;
