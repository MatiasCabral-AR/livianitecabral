import React from "react";
import { Col , Button} from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import './ProductCard.css';
import { Link } from "react-router-dom";

function ProductCard({props}){
    let {id, name, price, src1, discount, stock, cant} = props
    return(
        <Col lg={3} md={4} sm={6} className='card d-flex align-items-center justify-content-center' key={id} style={{backgroundImage:`url(${src1})`, backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
            <div className="card-content">
                <p className="card-title">{name}</p>
                {discount > 0 ? <div><p className="card-price text-muted text-decoration-line-through">${price}</p><p className="card-price">${(price - (price*discount)/100)}</p></div> : <p className="card-price">${price}</p>}
                <ItemCount stock={stock} product={{id, name, price, discount, src1, stock, cant}} buttonText='Agregar al Carrito' />
                <Link className="cart-link" to={`/product/${id}`}><Button className="cart-button">Ver producto</Button></Link>
            </div>
        </Col>
    )
}

export default ProductCard;