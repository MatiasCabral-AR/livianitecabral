import React from "react"
import {Row, Container, Col} from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'


function ItemDetail({id, name, price, discount, src1, src2, src3, src4, description, stock}){
    return(
        <Container>
            <Col lg={8} md={8} sm={10} xs={12} className='border p-3 main-section'>
                <Row className="m-0">
                    <Col lg={4} className='left-side-product-box pb-3'>
                        <img src={src1} alt="Foto de producto" />
                        <div className="sub-img">
                            <img src={src2} alt="" />
                            <img src={src3} alt="" />
                            <img src={src4} alt="" />
                        </div>
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
                                    <div className="d-flex flex-column">
                                        <span>- {description[0]}</span>
                                        <span>- {description[1]}</span>
                                        <span>- {description[2]}</span>
                                        <span>- {description[3]}</span>
                                        <span>- {description[4]}</span>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    {stock > 0 ? <ItemCount stock={stock} buttonDisplay='true' buttonText='Agregar al Carrito' product={{id, name, price, discount, src1, stock}}/> : <div><hr/><h5>No hay stock de este producto</h5></div>}
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