import React, {useState} from "react"

function NewReviewForm ({handleAddReview, params}) {
    const [formData, setFormData] = useState({user_id:1, product_id: parseInt(params.id), comment: "", rating: 0})

    function handleChange (event) {
        setFormData({...formData, [event.target.name]: event.target.value})
        
    }

    function handleSubmit (event) {
        event.preventDefault()
        const newReview = {
            user_id: 1,
            product_id: formData.product_id,
            comment: formData.comment,
            rating: formData.rating
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
            <h2>New Review Form</h2>

            <form onSubmit={handleSubmit} className="form" autoComplete="off">
                <label htmlFor="comment">Comment</label>
                <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange = {handleChange}
                />

                <label htmlFor="rating">Rating</label>
                <select>
                    <option value="1"> 1</option>
                    <option value ="2"> 2</option>
                    <option value ="3"> 3</option>
                    <option value ="4"> 4</option>
                </select>
                

                <button type="submit">Add Comment</button>

            </form>
        </section>

    )
}

export default NewReviewForm;