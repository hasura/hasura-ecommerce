import React from "react";
import Rating from "./Rating";

const Review = ({ review }) => {
  return (
    <div className="mb-sm">
      <div className="mb-xs">
        <Rating rating={review.rating} />
        <span className="strong">
          {/* Subject would go here, needs to be added to product_review model */}
        </span>
      </div>
      <p>{review.comment}</p>
    </div>
  );
};

export default Review;
