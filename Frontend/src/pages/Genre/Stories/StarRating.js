import React, { useState } from 'react';
const StarRating = ({ initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);
  const handleStarClick = (newRating) => {
    setRating(newRating);
    onRatingChange(newRating);
  };
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? 'star filled' : 'star'}
          onClick={() => handleStarClick(star)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};
export default StarRating;
