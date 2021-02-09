import React, {useState} from "react"

function NewReviewForm ({user, handleAddReview, params}) {
    const [formData, setFormData] = useState({user_id:1, product_id: parseInt(params.id), comment: "", rating: 1, name: user})

    function handleChange (event) {
        setFormData({...formData, [event.target.name]: event.target.value})
        
    }

    function handleSubmit (event) {
        event.preventDefault()
        const newReview = {
            user_id: 1,
            product_id: formData.product_id,
            comment: formData.comment,
            rating: parseInt(formData.rating),
            name: user

        }

        console.log(newReview)

        const configObj = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newReview)
        }

        fetch("http://localhost:3000/reviews", configObj)
        .then (r=> r.json())
        .then(handleAddReview)

    }


    return (
        
        <section>
            <h2>Tried this product out already? Share your thoughts here:</h2>

            <form onSubmit={handleSubmit} className="form" autoComplete="off">
                <label htmlFor="comment">Comment</label>
                <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange = {handleChange}
                />

                <label htmlFor="rating">Rating</label>
                <select name="rating" id="rating" value={formData.rating} onChange={handleChange}>
                    <option value="1"> ☆</option>
                    <option value ="2">☆☆</option>
                    <option value ="3">☆☆☆</option>
                    <option value ="4">☆☆☆☆</option>
                    <option value ="5">☆☆☆☆☆</option>
                </select>
                

                <button type="submit">Submit Review</button>

            </form>
        </section>

    )
}

export default NewReviewForm;