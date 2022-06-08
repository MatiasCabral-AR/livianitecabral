import React from "react"
import ProductCard from "../ProductCard/ProductCard";
import { Row } from "react-bootstrap";
import './ProductList.css'

function ProductList ({products}){
    return(
        <Row className="productList">
        {products.map(product => (
            <ProductCard key={product.id} props={product}/>
        ))}
        </Row>
    )
}

export default ProductList;