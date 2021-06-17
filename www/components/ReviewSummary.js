import Rating from "./Rating";

const ReviewSummary = ({
  averageRating,
  ratingPercentages,
  toggleModalHandler,
}) => {
  const parsePercentage = (pct) => (isNaN(pct) ? "N/A" : `${pct}%`);
  return (
    <div className="col-3">
      <h2 className="mb-xs">Customer Reviews</h2>
      <h3 className="mb-sm">{averageRating} out of 5</h3>
      <hr className="mb-sm" />
      <p className="strong mb-xs">Review Breakdown</p>
      <div className="mb-xs">
        <Rating rating={5} />
        <span className="muted">
          {parsePercentage(ratingPercentages.fiveStar)}
        </span>
      </div>
      <div className="mb-xs">
        <Rating rating={4} />
        <span className="muted">
          {parsePercentage(ratingPercentages.fourStar)}
        </span>
      </div>
      <div className="mb-xs">
        <Rating rating={3} />
        <span className="muted">
          {parsePercentage(ratingPercentages.threeStar)}
        </span>
      </div>
      <div className="mb-xs">
        <Rating rating={2} />
        <span className="muted">
          {parsePercentage(ratingPercentages.twoStar)}
        </span>
      </div>
      <div className="mb-sm">
        <Rating rating={1} />
        <span className="muted">
          {parsePercentage(ratingPercentages.oneStar)}
        </span>
      </div>
      <hr className="mb-sm" />
      <p className="strong mb-xs">Write a Review</p>
      <button className="default w-100 mb-md" onClick={toggleModalHandler}>
        Write a Review
      </button>
    </div>
  );
};

export default ReviewSummary;
