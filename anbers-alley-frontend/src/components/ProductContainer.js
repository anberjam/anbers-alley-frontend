import React, {useState} from "react"
import ProductCategory from "./ProductCategory"
import ProductSubcategory from "./ProductSubcategory"


function ProductContainer() {
    const [products, setProducts] = useState([]) 
    const [skinCategory, setSkinCategory] = useState("all")

    
    useState(()=>{
        fetch("http://localhost:3000/products")
        .then(r=>r.json())
        .then(productsArray => setProducts(productsArray))
    }
    ,[])

    const filteredProducts = products.filter((p)=> p.skin_type === skinCategory)



    


    return (
        <div className="all products">
            
            <ProductCategory setProducts={setProducts} skinCategory={skinCategory} setSkinCategory={setSkinCategory} />
            {skinCategory === "all" ? <ProductSubcategory products={products}/> : <ProductSubcategory products = {filteredProducts}/>}


            
        </div>

    )
}

export default ProductContainer