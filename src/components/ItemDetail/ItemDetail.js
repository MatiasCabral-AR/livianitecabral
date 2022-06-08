import React from "react"
import {Row, Container, Col} from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import onAdd from "../../utilities/onAdd";
import './ItemDetail.css'


function ItemDetail({id, name, price, discount, src1, src2, detail, quantity}){
    return(
        <Container>
            <Col lg={8} md={8} sm={10} xs={12} className='border p-3 main-section'>
                <Row className="m-0">
                    <Col lg={4} className='left-side-product-box pb-3'>
                        <img src={src1} alt="Foto de producto" />
                        <span className="sub-img">
                            <img src={src2} alt="" />
                        </span>
                    </Col>
                    <Col lg={8}>
                        <div className="right-side-pro-detail p-3 m-0">
                            <Row>
                                <Col lg={12}>
                                    <p className="m-0 p-0">{name}</p>
                                </Col>
                                <Col lg={12}>
                                    <p className="p-0 m-0 price-pro">${price}</p>
                                    <hr className="p-0 m-0"/>
                                </Col>
                                <Col lg={12}>
                                    <h5>Detalles del Producto</h5>
                                    <span>{detail}</span>
                                </Col>
                                <Col lg={12}>
                                    {quantity > 0 ? <ItemCount initial='0' stock={quantity} buttonDisplay='true' buttonText='Agregar al Carrito' onAdd={onAdd} /> : <div><hr/><h5>No hay stock de este producto</h5></div>}
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Container>
        )
}

export default ItemDetail;