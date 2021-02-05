import React from "react"


function ProductCategory({ products, setSkinCategory}) {



        function handleFilterChange (event) {
            setSkinCategory(event.target.value) 
        }
        




    return (
    <div>
        <nav className="skin category">
            <div className="tab">
                <button className="tablinks" onClick={handleFilterChange} value="all">All</button>
                <button className="tablinks" onClick={handleFilterChange} value="combination">Combination</button>
                <button className="tablinks" onClick={handleFilterChange} value="dry">Dry</button>
                <button className="tablinks" onClick={handleFilterChange} value="oily">Oily</button>
                <button className="tablinks" onClick={handleFilterChange} value="sensitive">Sensitive</button>
                <button className="tablinks" onClick={handleFilterChange} value="aging">Aging</button>

            </div>


        </nav>

        </div>
    )
}
export default ProductCategory