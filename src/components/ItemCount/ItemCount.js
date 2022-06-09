import {Container, Button} from 'react-bootstrap';
import React, {useState, useContext} from 'react';
import './ItemCount.css';
import productCheck from '../../utilities/productCheck';
import CartContext from '../../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({stock, buttonDisplay, buttonText, product}) => {
    const [cant, itemCant] = useState(1)
    const {cart, setCart} = useContext(CartContext)
    
    function decrementCant(){
        if(cant > 1){
            itemCant(prevCant => prevCant - 1)
        }
    }
    
    function incrementCant(){
        if(cant < parseInt(stock)){
            itemCant(prevCant => prevCant + 1)
        }
    }

    function onAdd() {
        if(!productCheck(cart, product)){
            toast('Producto Agregado al Carrito')
            product.cant = cant
            setCart([...cart, product])
        }else{
            let checkProduct = cart.find(element => element.id === product.id)
            let checkCant = checkProduct.cant + cant
            if(checkCant > stock){
                toast(`Error!, El stock es de : ${product.quantity}. Chequea el Carrito y vuelve a intentar`)
            }else{
                toast('Contenido del Carrito Actualizado')
                let index = cart.findIndex((element) => element.id === checkProduct.id)
                cart[index].cant = checkCant
            }
        }
    }
    
    return (
            <div className='d-flex flex-column justify-content-center'>
                <ToastContainer/>
                {product.quantity > 0 ? 
                <>
                    <Container className='d-flex justify-content-center'>
                        <Button size='m' onClick={decrementCant} variant="dark">-</Button>
                        <span className='mx-4 display-5 text-dark'>{cant}</span>
                        <Button size='m' onClick={incrementCant} variant="dark">+</Button>
                    </Container>
                    <Button onClick={onAdd} className="mt-2 cart-button">{buttonText}</Button>
                </>
                : <p>No hay Stock de este Producto</p>
                }
            </div>
    )
}

export default ItemCount;