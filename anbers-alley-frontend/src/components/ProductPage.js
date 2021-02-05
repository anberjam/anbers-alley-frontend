import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ReviewsContainer from "./ReviewsContainer"
import NewReviewForm from "./NewReviewForm"


function ProductPage ({reviews, setReviews, handleAddReview}) {
    const [p, setP] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);
    const [reviewsForItem, setReviewsForItem] = useState([])

    const params = useParams();
    

    
    useEffect(()=>{
        fetch(`http://localhost:3000/products/${params.id}`)
        .then(r=> r.json())
        .then(pDetails => 
            {setP(pDetails) 
            setIsLoaded(true)
        })
        
    },[params.id])
    

    // setReviewsForItem(reviews.filter((review)=> review.product_id === params.id))

    // console.log(reviewsForItem)

 


 
    
    if (!isLoaded) return <h2>Loading...</h2>;

    return (
        <div>
            <h1>{p.name}</h1>
            <h4>{p.brand}</h4>
            <p>price: $ {p.price}</p>
            <p>{p.description}</p>
            <img src={p.picture} alt = {p.name}></img>
            <p>{p.how_to_use}</p>
        <NewReviewForm handleAddReview={handleAddReview} params={params}/>
        <ReviewsContainer reviews={reviews}/>
        </div>
        
    )

}

export default ProductPage;