import React from "react"
import ProductCard from "../ProductCard/ProductCard";
import { Row } from "react-bootstrap";

function ProductList ({products}){
    return(
        <Row>
        {products.map(product => (
            <ProductCard className="" key={product.id} props={product}/>
        ))}
        </Row>
    )
}

export default ProductList;