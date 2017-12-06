import React from "react";
import Rating from "react-rating";

const RatingWidget = ({ name, onClick, ratingFor, currentRating }) => {
  return (
    <Rating
      initialRate={currentRating}
      fractions={2}
      onClick={name => onClick(name)}
      data-materialName={ratingFor}
    />
  );
};

export default RatingWidget;
