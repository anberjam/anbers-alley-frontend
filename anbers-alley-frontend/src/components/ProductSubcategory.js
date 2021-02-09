import React from "react"
import ProductItem from "./ProductItem"


function ProductSubcategory ({products}) {

    const cleanse = products.filter((product)=> product.product_type === "cleanse")
    const moisturize = products.filter((product)=> product.product_type === "moisturize")
    const treat = products.filter((product)=> product.product_type === "treat")
    const mask = products.filter((product)=> product.product_type === "facemask_supplement")

    const renderCleanse = cleanse.map((p)=> <ProductItem key={p.id} p={p}/>)
    const renderMoisturize = moisturize.map((p)=> <ProductItem key={p.id} p={p}/>)
    const renderTreat = treat.map((p)=> <ProductItem key={p.id} p={p}/>)
    const renderMask= mask.map((p)=> <ProductItem key={p.id} p={p}/>)



    return (
      
        <div className= "category">
            <div className="cleanse">
                <h2> ≋C≋L≋E≋A≋N≋S≋E≋ </h2>
                <div className="scroll">

                    {renderCleanse}

                </div>
            </div>

            <div className="moisturize">
                <h2>(っ◔◡◔)っ ♥ MOISTURIZE ♥</h2>
                <div className="scroll">
                    <div className="scrollItem">
                    {renderMoisturize}
                    </div>
                </div>
            </div>

            <div className="treat">
                <h2>✷【ＴＲＥＡＴ】✷</h2>
                <div className="scroll">
                    <div className="scrollItem">
                    {renderTreat}
                    </div>
                </div>
            </div>

            <div className="mask">
                <h2>🎀 MASK/SUPPLEMENT 🎀</h2>
                <div className="scroll">
                    <div className="scrollItem">
                    {renderMask}
                    </div>
                </div>
            </div>



          
        </div>
    )
}

export default ProductSubcategory;