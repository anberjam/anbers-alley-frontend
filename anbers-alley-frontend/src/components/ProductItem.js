import React from "react"
import {Link} from "react-router-dom"


function ProductItem ({p}) {
    
    return (

        
        <a href="productItem">
            <p>
                <Link to={`/products/details/${p.id}`}>
             {p.name} <br></br>
            <img className = "main" src={p.picture} alt={p.name}></img><br></br>
             </Link>
             </p>

             </a>
             
            
             
        
    )
}

export default ProductItem;