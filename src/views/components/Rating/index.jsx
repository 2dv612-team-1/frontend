import React from "react";
import Rating from "react-rating";
import Container from "./Container";

const RatingWidget = ({ ratingFor, onClick, currentRating, name }) => (
  <Container>
    <Rating
      initialRate={currentRating}
      name={name}
      fractions={2}
      onClick={name => onClick(name)}
      data-materialName={ratingFor}
    />
  </Container>
);

export default RatingWidget;
