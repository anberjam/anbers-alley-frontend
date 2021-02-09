import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ReviewsContainer from "./ReviewsContainer"
import NewReviewForm from "./NewReviewForm"


function ProductPage ({user, reviews, setReviews, handleAddReview}) {
    const [p, setP] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);


    const params = useParams();
    

    
    useEffect(()=>{
        fetch(`http://localhost:3000/products/${params.id}`)
        .then(r=> r.json())
        .then(pDetails => 
            {setP(pDetails) 
            setIsLoaded(true)
        })
        
    },[params.id])
    

    
    if (!isLoaded) return <h2>Loading...</h2>;

    return (
        <div>
            <br></br>
            <img className= "page" src={p.picture} alt = {p.name}></img>
            <h1>{p.name}</h1>
            <h4> {p.brand}</h4>
            <p>price: $ {p.price}</p>
            <br></br>
            <p>{p.description}</p>
            <br></br>
            <p>{p.how_to_use}</p>
                <br></br><br></br><br></br><br></br><br></br><br></br>
            <div className= "reviews">
        <NewReviewForm handleAddReview={handleAddReview} user={user} params={params}/>
        <ReviewsContainer reviews={reviews} params = {params}/>
        </div>
        </div>
        
    )

}

export default ProductPage;