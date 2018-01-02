import styled from "styled-components";
import fonts from "../../constants/fonts";

const TableText = styled.p`
  font-size: 16px;
  text-align: ${props => (props.center ? "center" : "left")};
  font-family: ${fonts.primary};
  margin-top: 0px;
  font-weight: 800;
  flex-basis: 50%;
`;

export default TableText;
