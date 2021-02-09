import React from "react"

function ReviewsItem ({review}) {


    
    return (
        <div className="individualReview">
        <h1>{review.name} says: "{review.comment}"</h1>
        <p>Rating: {review.rating} / 5 </p>
        </div>
    )
}

export default ReviewsItem;