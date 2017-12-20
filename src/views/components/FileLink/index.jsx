import styled from "styled-components";
import fonts from "../../constants/fonts";
import colors from "../../constants/colors";

const FileLink = styled.p`
  font-size: 16px;
  text-align: ${props => (props.center ? "center" : "left")};
  font-family: ${fonts.primary};
  margin-top: 0px;
  font-weight: 800;
  float:left;
  margin-right:15px;
  width:140px;
`;

export default FileLink;
