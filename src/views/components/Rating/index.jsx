import React from "react";
import Rating from "react-stars";
import Container from "./Container";

const RatingWidget = ({ ratingFor, onClick, currentRating, name }) => (
  <Container>
    <Rating
      initialRate={currentRating}
      name={name}
      fractions={2}
      onClick={(rate, event) => onClick(rate, event, name)}
    />
  </Container>
);

export default RatingWidget;
