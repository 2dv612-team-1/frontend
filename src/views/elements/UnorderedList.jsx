import styled from "styled-components";
import PropTypes from "prop-types";
import fonts from "../constants/fonts";
import colors from "../constants/colors";

const defaultProps = {
  styleType: "disc",
  marginLeft: 0
};

const propTypes = {
  styleType: PropTypes.string,
  marginLeft: PropTypes.number
};

const UnorderedList = styled.ul`
  font-size: 16px;
  text-transform: capitalize;
  font-family: ${fonts.secondary};
  list-style-position: inside;
  padding: 0;
  list-style-type: ${props => props.styleType};
  margin-left: ${props => props.marginLeft}px;
  color: ${colors.gray};
`;

UnorderedList.defaultProps = defaultProps;
UnorderedList.propTypes = propTypes;
export default UnorderedList;
