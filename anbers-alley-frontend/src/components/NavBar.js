import React from "react"
import {Link} from "react-router-dom"

function NavBar ({user, setUser, setLoggedIn}) {

    function handleLogout() {
        // remove the user from state
        setUser(" ")
        setLoggedIn(false)
    }

return (
    <div className = "navbar">
       
       <div>
           <p className = "welcome">Welcome, {user}!   </p>
           {user? (
               <>
           <button className = "nav"> <Link to="/products" className = "nav">See Products</Link></button> &nbsp;
            <button className = "nav"><Link to="/my-reviews" className = "nav">My Reviews</Link></button>&nbsp;
            <button onClick={handleLogout} className="logout">Logout</button>
            </> ) : (
                <>
                <Link to="/">Login</Link>
                </>
            )  
         } 
         <br></br><br></br><br></br>
       </div>

     </div>
)
}

export default NavBar;