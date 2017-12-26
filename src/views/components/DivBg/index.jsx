import styled from "styled-components";
import colors from "../../constants/colors";

const DivBg = styled.div`
  background: ${props =>
    props.pop ? `${colors.primary}` : `${colors.secondary}`};
  padding: 35px;
  border-color: red;
  margin: 20px auto;
`;

export default DivBg;
