import React, {useState} from "react"
import {Redirect, Route, Switch} from "react-router-dom"
import Header from "./Header"
import Login from "./Login"
import NavBar from "./NavBar"
import ProductContainer from "./ProductContainer"



function App () {
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState(" ")
    
    return (
        <div className="App">
            <Header />
                {loggedIn ? <h3>Welcome {user}!</h3> : null}

            <Route path="/">
                {loggedIn ? <NavBar setLoggedIn={setLoggedIn} user={user} setUser= {setUser}/> :
                 <Login setLoggedIn = {setLoggedIn} setUser={setUser} />}
            </Route>
                
            <Switch>

            <Route path="/products">
                {loggedIn ? <ProductContainer /> : <Redirect to="/" /> }
            </Route>
            <Route path="*">
                <Redirect to="/" />
            </Route>

            </Switch>
            

        </div>
    )
}

export default App