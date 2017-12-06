import React from "react";
import Rating from "react-rating";
import PropTypes from "prop-types";

const propTypes = {
  id: PropTypes.string.isRequired
};

const RatingWidget = ({ id }) => {
  return (
    <Rating
      initialRate={2.5}
      fractions={2}
      onRate={rate => alert("Your rating: " + rate)}
    />
  );
};

export default RatingWidget;
