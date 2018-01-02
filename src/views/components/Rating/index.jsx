import React from "react";
import Rating from "react-stars";
import Container from "./Container";

const RatingWidget = ({ ratingFor, onClick, currentRating, name }) => (
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

export default RatingWidget;
