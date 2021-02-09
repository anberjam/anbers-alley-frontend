import React from "react"
import ReviewsItem from "./ReviewsItem"


function ReviewsContainer ({reviews, params}) {


    const reviewForProduct = reviews.filter((review)=> review.product_id === parseInt(params.id))

    const renderEachReview = reviewForProduct.map((review)=> <ReviewsItem key={review.id} review = {review}/>)


    return (
        <div>
        <h2>Check Out What Others Had To Say:</h2>
   
        {renderEachReview}
        </div>
    )
}

export default ReviewsContainer;