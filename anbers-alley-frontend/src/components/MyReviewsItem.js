import React, {useState} from "react"

function MyReviewsItem ({r, deleteReview}) {
    const [editButtonClicked, setEditButtonClicked] = useState(false)
    const [formData, setFormData] = useState({user_id:1, product_id: parseInt(r.id), comment: r.comment, rating: r.rating, name: r.name})

    function handleChange (event) {
        setFormData({...formData, [event.target.name]: event.target.value})
        
    }

    function handleDeleteReview () {
        deleteReview(r)

        const configObj = {
            method: "DELETE"
        }

            fetch(`http://localhost:3000/reviews/${r.id}`, configObj)
    }


    function handleEditReview(event) {
        event.preventDefault()
        setEditButtonClicked(!editButtonClicked)
        
        const editedObj = {
            user_id: 1,
            product_id: formData.product_id,
            comment: formData.comment,
            rating: parseInt(formData.rating),
            name: formData.name
        }

        const configObj = {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(editedObj)
        }

        fetch(`http://localhost:3000/reviews/${r.id}`, configObj)

        

    }



    return (
        <div>
            <h2>comment: "{r.comment}" rating: {r.rating} / 5</h2>
             <button onClick={handleDeleteReview}>Delete Review</button>

             <form  className="form" onSubmit = {handleEditReview} autoComplete="off">
                <label htmlFor="comment">Comment</label>
                <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange = {handleChange}
                />

                <label htmlFor="rating">Rating</label>
                <select name="rating" id="rating" value={formData.rating} onChange = {handleChange}>
                    <option value="1"> ☆</option>
                    <option value ="2">☆☆</option>
                    <option value ="3">☆☆☆</option>
                    <option value ="4">☆☆☆☆</option>
                    <option value ="5">☆☆☆☆☆</option>
                </select>
                

                <button type="submit">Edit Comment</button>

            </form> 
        </div>
    )
}

export default MyReviewsItem