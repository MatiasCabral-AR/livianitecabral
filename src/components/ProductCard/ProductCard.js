import React from "react";
import { Col } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import onAdd from "../../utilities/onAdd";
import './ProductCard.css'


function ProductCard({props}){
    let {id, name, price, src1, src2} = props
    
    return(
        <Col lg={3} md={6} sm={6} className='product-grid mb-1' key={id}>
            <div className="product-image p-1">
                <a href="#">
                    <img className="pic-1" src={src1} alt="" />
                    <img className="pic-2" src={src2} alt="" />
                </a>
                <div className="product-buy w-100 d-flex justify-content-center align-items-center position-absolute">
                    <a href="#" className="product-show d-flex justify-content-center align-items-center"><i className="fas fa-search text-dark ver"></i></a>
                    <a href="#" className="add-cart d-flex justify-content-center align-items-center"><i className="fas fa-shopping-cart text-dark agregar"></i></a>
                </div>
                <span className="product-new-label">Sale</span>
                <span className="product-discount-label">Descuento</span>
            </div>
            <div className="product-content">
                <p className="title">{name}</p>
                <div className="price">
                    ${price}
                </div>
                <ItemCount initial='0' stock='10' buttonDisplay='true' buttonText='Agregar al Carrito' onAdd={onAdd} />
            </div>
        </Col>
    )
}

export default ProductCard;