import React, {useState, useEffect} from "react"
import {Redirect, Route, Switch} from "react-router-dom"
import Header from "./Header"
import Login from "./Login"
import NavBar from "./NavBar"
import ProductContainer from "./ProductContainer"
import MyReviewsPage from "./MyReviewsPage"
import ProductPage from "./ProductPage.js"




function App () {
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState(" ")
    const [reviews, setReviews] = useState([])

    useEffect(()=> {
        fetch("http://localhost:3000/reviews")
        .then(r=>r.json())
        .then(revData => setReviews(revData))
    }
    ,  [])


    function handleAddReview (newReview) {
        setReviews([...reviews, newReview])
    }

console.log(reviews)

    
    return (
        <div className="App">
            <Header />
                {loggedIn ? <h3>Welcome {user}!</h3> : null}

            <Route path="/">
                {loggedIn ? <NavBar setLoggedIn={setLoggedIn} user={user} setUser= {setUser}/> :
                 <Login setLoggedIn = {setLoggedIn} setUser={setUser} />}
            </Route>
                
            <Switch>
                <Route path="/products/details/:id">
                    {loggedIn? <ProductPage reviews={reviews} setReviews = {setReviews} handleAddReview={handleAddReview}/> : <Redirect to = "/" /> }
                </Route>

                <Route path="/products">
                    {loggedIn ? <ProductContainer /> : <Redirect to="/" /> }
                </Route>

                <Route path="/my-reviews">
                    {loggedIn ? <MyReviewsPage /> : <Redirect to = "/products" /> }
                </Route>



                <Route path="*">
                    <Redirect to="/" />
                </Route>

            </Switch>
            

        </div>
    )
}

export default App