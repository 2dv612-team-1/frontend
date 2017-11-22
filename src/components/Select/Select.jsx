import styled from "styled-components";
import fonts from "../../constants/fonts";

const Select = styled.select`
	display: block;
	width: 200px;
	height: 40px;
	font-family: ${fonts.secondary};
	letter-spacing: 0.1em;
	font-size: 1em;
	text-transform: capitalize;
`;

export default Select;
