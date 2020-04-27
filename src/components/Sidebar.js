import React from "react"
import Categories from "./Categories"
import Products from "./Products"
import Itemachive from "./Itemachive"
import ProductCard from "./ProductCard"

function Sidebar() {
    return(
        <div>
            <Categories/>
            <Products/>
            <Itemachive/>
            <ProductCard/>

        </div>
    )
}

export default Sidebar;