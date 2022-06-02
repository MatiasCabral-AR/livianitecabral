import React from "react"
import {Card} from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import onAdd from "../../utilities/onAdd";


function ItemDetail({product}){
    return(
        <Card id={product?.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product?.src1} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{product?.name}</Card.Title>
                <Card.Subtitle>{product?.price}</Card.Subtitle>
                <Card.Text>{product?.detail}</Card.Text>
                <ItemCount initial='0' stock='10' buttonDisplay='true' buttonText='Agregar al Carrito' onAdd={onAdd} />
            </Card.Body>
        </Card>
        )
}

export default ItemDetail;