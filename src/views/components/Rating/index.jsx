import React from "react";
import Rating from "react-rating";
import PropTypes from "prop-types";

const propTypes = {
  id: PropTypes.string.isRequired
};

const RatingWidget = ({ id, onChange, ratingFor, currentRating }) => {
  return (
    <Rating
      initialRate={currentRating}
      fractions={2}
      onClick={(rate, event) => {
        onChange(rate, event);
      }}
      data-materialName={ratingFor}
    />
  );
};

export default RatingWidget;
