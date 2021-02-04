import React, {useState} from "react"
import ProductCategory from "./ProductCategory"
import ProductPage from "./ProductPage.js"

function ProductContainer() {
    const [products, setProducts] = useState([]) 

    
    useState(()=>{
        fetch("http://localhost:3000/products")
        .then(r=>r.json())
        .then(productsArray => setProducts(productsArray))
    }
    ,[])

    const combo = products.filter((p)=> p.skin_type === "combination")
   

    const dry = products.filter((p)=> p.skin_type === "dry")

    
 

    return (
        <div className="all products">
            
            <ProductCategory products = {products} dry = {dry} combo = {combo}/>

        </div>

    )
}

export default ProductContainer