import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import onAdd from "../../utilities/onAdd";


function ProductCard({props}){
    return(
        <Card id={props.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.src1} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.price}</Card.Text>
                <ItemCount initial='0' stock='10' buttonDisplay='true' buttonText='Agregar al Carrito' onAdd={onAdd} />
            </Card.Body>
        </Card>
    )
}

export default ProductCard;