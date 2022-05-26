import React from "react";
import {Card, Button} from "react-bootstrap";

function ProductCard({props}){
    console.log(props)
    return(
        <Card id={props.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.src1} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.price}</Card.Text>
                <Button className="justify-content-center mt-2" variant="primary">Agregar al Carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;