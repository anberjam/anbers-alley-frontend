import React from "react"
import ReviewsItem from "./ReviewsItem"


function ReviewsContainer ({reviews}) {


    const renderEachReview = reviews.map((review)=> <ReviewsItem review = {review}/>)


    return (
        <div>
        <h3>Reviews Container</h3>
   
        {renderEachReview}
        </div>
    )
}

export default ReviewsContainer;