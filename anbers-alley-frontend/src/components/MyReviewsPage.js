import React from "react"
import MyReviewsItem from "./MyReviewsItem"

function MyReviewsPage ({deleteReview, user, reviews}) {

    const usersReviews = reviews.filter((review)=> review.name === user)


    const eachMyReview = usersReviews.map((r)=> <MyReviewsItem key={r.id} r={r} deleteReview={deleteReview}/>)
 
    return (
         <div> 
             <h1>My Reviews Page</h1> 
             {eachMyReview} 
        </div>  
    )
        
    
}

export default MyReviewsPage;