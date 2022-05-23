import React from "react";
import { Card, Button, Toast } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

function onAdd() {
    <Toast>
        <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body></Toast.Body>
    </Toast>
}

function ProductCard({id, name, price, discount, src1, src2}){
    return(
        <Card id={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={src1} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{name}</Card.Title>
                <Card.Text>{price}</Card.Text>
                <ItemCount initial='0' stock='10'/>
                <Button onClick={onAdd} className="justify-content-center mt-2" variant="primary">Agregar al Carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;