import {Toast, ToastContainer } from "react-bootstrap";


function CartToast({alert, text}) {
  
    return (
        <ToastContainer className="p-3" position='top-end'>
            <Toast show={true}  delay={3000} autohide>
                <Toast.Header>
                    <strong className="me-auto">{alert}</strong>
                </Toast.Header>
                <Toast.Body>{text}</Toast.Body>
            </Toast>
        </ToastContainer>
    )
  }

export default CartToast