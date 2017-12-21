import styled from "styled-components";
import PropTypes from "prop-types";
import fonts from "../constants/fonts";

const defaultProps = {
  styleType: "disc",
  reset: "item"
};

const propTypes = {
  styleTypes: PropTypes.string,
  reset: PropTypes.string
};

const OrderedList = styled.ol`
  font-size: 16px;
  text-transform: capitalize;
  font-family: ${fonts.secondary};
  list-style-position: inside;
  padding: 0;
  list-style-type: ${props => props.styleType};
  counter-reset: ${props => props.reset};
`;

OrderedList.defaultProps = defaultProps;
OrderedList.propTypes = propTypes;
export default OrderedList;
