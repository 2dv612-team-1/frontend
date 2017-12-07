import React from "react";
import Container from "./Container";
import Rate from "./Rate";

const RatingWidget = ({ ratingFor, onClick, currentRating }) => (
  <Container>
    <Rate
      name={ratingFor}
      onClick={onClick}
      value="1"
      initialRate={currentRating}
    />
    <Rate
      name={ratingFor}
      onClick={onClick}
      value="2"
      initialRate={currentRating}
    />
    <Rate
      name={ratingFor}
      onClick={onClick}
      value="3"
      initialRate={currentRating}
    />
    <Rate
      name={ratingFor}
      onClick={onClick}
      value="4"
      initialRate={currentRating}
    />
    <Rate
      name={ratingFor}
      onClick={onClick}
      value="5"
      initialRate={currentRating}
    />
  </Container>
);

export default RatingWidget;
