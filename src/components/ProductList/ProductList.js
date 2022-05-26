import React from "react"
import ProductCard from "../ProductCard/ProductCard";

function ProductList ({products}){
    return(
        products.map(product => (
            <ProductCard className="d-flex justify-content-center align-items-center" key={product.id} props={product}/>
        ))
    )
}

export default ProductList;