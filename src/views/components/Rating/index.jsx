import React from "react";
import PropTypes from "prop-types";
import Rating from "react-stars";
import Container from "./Container";

const propTypes = {
  currentRating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const RatingWidget = ({ onClick, currentRating, name }) => (
  <Container>
    <Rating
      value={currentRating}
      name={name}
      fractions={2}
      onClick={(rate, event) => onClick(rate, event, name)}
      size={30}
      color2={'#3f51b5'}
    />
  </Container>
);

RatingWidget.propTypes = propTypes;
export default RatingWidget;
