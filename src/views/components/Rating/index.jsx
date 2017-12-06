import React from "react";
import Rating from "react-rating";

const RatingWidget = ({ fileName, onClick, ratingFor, currentRating }) => {
  return (
    <Rating
      initialRate={currentRating}
      name={fileName}
      fractions={2}
      onClick={onClick}
      data-materialName={ratingFor}
    />
  );
};

export default RatingWidget;
