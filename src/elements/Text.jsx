import styled from "styled-components";
import fonts from "../constants/fonts";

const Text = styled.p`
	font-size: 16px;
	color: ${props => (props.error ? "red" : "black")};
	text-align: ${props => (props.center ? "center" : "left")};
	font-family: ${fonts.primary};
`;

export default Text;
