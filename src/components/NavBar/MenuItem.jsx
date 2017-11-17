import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../constants/colors";

const MenuItem = styled(Link)`
  margin: 0 10px 0 10px;
  font-size: 18px;
  color: ${colors.secondary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default MenuItem;
