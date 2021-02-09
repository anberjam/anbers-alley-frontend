import React from "react"
// import {useHistory} from "react-router-dom"

function Login ({setLoggedIn, setUser}) {
    // const history = useHistory()

    function handleLogin(username) {
        setLoggedIn(true)
        // history.push("/products")
    }

return (

    <div className = "login"> 

    <div className="content">
        <br></br>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4Jucqnwp4KC01h8HezECLYkdafUWT7k_xA&usqp=CAU" alt="welcome" />
        <h1>Please Enter Your Name</h1>
        <input type="text" onChange = {e => setUser(e.target.value)} autoComplete="off"></input>&nbsp;
        <button className="login" onClick={handleLogin}>Login</button>
        </div>
     </div>
)
}

export default Login;