import React from "react"
// import {useHistory} from "react-router-dom"

function Login ({setLoggedIn, setUser}) {
    // const history = useHistory()

    function handleLogin(username) {
        setLoggedIn(true)
        // history.push("/products")
    }

return (
    <div> 
        <h1>Please Enter Your Name</h1>
        <input type="text" onChange = {e => setUser(e.target.value)} autoComplete="off"></input>&nbsp;
        <button onClick={handleLogin}>Login</button>
     </div>
)
}

export default Login;