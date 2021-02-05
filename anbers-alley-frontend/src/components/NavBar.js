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
           {user? (
               <>
            <Link to="/products">Products</Link> &nbsp;
            <Link to="/my-reviews">My Reviews</Link>&nbsp;
            <button onClick={handleLogout}>Logout</button>
            </> ) : (
                <>
                <Link to="/">Login</Link>
                </>
            )  
         } 
       </div>

     </div>
)
}

export default NavBar;