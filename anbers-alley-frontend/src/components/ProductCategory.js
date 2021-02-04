import React from "react"
import ProductItem from "./ProductItem"

function ProductCategory({products, combo, dry}) {

    const eachProduct = products.map((p)=>  {

        if (p.product_type === "cleanse")
        {return 
        <ProductItem p={p} key={p.id}/>}})
    const comboProducts = combo.map((p)=> <ProductItem p={p} key={p.id}/>)

    return (
        <div className= "category">
            <div className="cleanse">
                <h2>CLEANSE</h2>
                <div className="scroll">
                    <div className="scrollItem">
                    Lots of stuff here                                                jkbnkjb            kjnkjnkjnkj                kjhkjhkjhlkjhkjhkjkjjkhnlknlkjnlkjnlkjnlkjnlkjnlkjnljnljnlknjlknlkjnljknlkjnlkjnlkjnlkjnljknljknljknljknlkjnlkjnlkjnlkjnljnljnljnljnln   jknjknkjn 
                    </div>
                </div>
            </div>

            <div className="moisturize">
                <h2>MOISTURIZE</h2>
                <div className="scroll">
                    <div className="scrollItem">
    
                    </div>
                </div>
            </div>

            <div className="treat">
                <h2>TREAT</h2>
                <div className="scroll">
                    <div className="scrollItem">
                    Lots of stuff here 
                    </div>
                </div>
            </div>

            <div className="mask">
                <h2>MASK/SUPPLEMENT</h2>
                <div className="scroll">
                    <div className="scrollItem">
                    Lots of stuff here 
                    </div>
                </div>
            </div>



            {eachProduct}
        </div>
    )
}
export default ProductCategory