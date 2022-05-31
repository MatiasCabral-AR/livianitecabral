import React from "react";
import { Card, Button, Toast } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

function onAdd(itemCount) {
    console.log(`Items agregados al carrito : ${itemCount}`)
}

function ProductCard({id, name, price, discount, src1, src2}){
    return(
        <Card id={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={src1} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{name}</Card.Title>
                <Card.Text>{price}</Card.Text>
                <ItemCount initial='0' stock='10' buttonDisplay='true' buttonText='Agregar al Carrito' onAdd={onAdd} />
            </Card.Body>
        </Card>
    )
}

export default ProductCard;