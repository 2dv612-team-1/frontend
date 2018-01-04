import styled from "styled-components";
import fonts from "../../constants/fonts";
import colors from "../../constants/colors";

const Input = styled.input`
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
&:hover {
  color: #fff;
  background: ${colors.primary};
}
margin-top:10px;
`;

export default Input;
