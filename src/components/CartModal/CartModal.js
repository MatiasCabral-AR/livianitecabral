import Modal from 'react-bootstrap/Modal'
import React from "react";
import { useState} from "react";
import { Button } from 'react-bootstrap';
import ClientForm from '../ClientForm/ClientForm';

function CartModal(){
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
    return(
      <>
      <button className='cart-button' onClick={handleShow}>Comprar</button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header className='bg-dark' closeButton>
              <Modal.Title className='text-light'>Por favor complete los siguientes datos.</Modal.Title>
          </Modal.Header>
          <Modal.Body className='bg-dark'>
              <ClientForm close={handleClose}/>
          </Modal.Body>
          <Modal.Footer className='bg-dark'>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
          </Modal.Footer>
      </Modal>
    </>   
    )
}
export default CartModal