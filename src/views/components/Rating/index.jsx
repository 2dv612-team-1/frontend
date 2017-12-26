import React from "react";
import PropTypes from "prop-types";
import Rating from "react-rating";
import Container from "./Container";

const propTypes = {
  currentRating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const RatingWidget = ({ onClick, currentRating, name }) => (
  <Container>
    <Rating
      initialRate={currentRating}
      name={name}
      fractions={2}
      onClick={(rate, event) => onClick(rate, event, name)}
    />
  </Container>
);

RatingWidget.propTypes = propTypes;
export default RatingWidget;
