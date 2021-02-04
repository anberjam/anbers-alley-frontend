import React from "react"

function ProductItem ({p}) {
    

    return (
        <div className="item">
            <h4>{p.name}</h4>
            <img src={p.picture} />

        </div>
    )
}

export default ProductItem