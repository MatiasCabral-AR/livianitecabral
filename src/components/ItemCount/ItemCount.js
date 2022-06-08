import {Container, Button} from 'react-bootstrap';
import React, {useState, useContext} from 'react';
import './ItemCount.css';
import productCheck from '../../utilities/productCheck';
import checkProductPrice from '../../utilities/checkProductPrice';
import CartContext from '../../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({stock, buttonDisplay, buttonText, product}) => {
    const [cant, itemCant] = useState(1)
    const {cart, setCart} = useContext(CartContext)
    console.log(product.quantity)
    
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
        product = {cant, ...product}
        if(productCheck(cart, product)){
            let cartProduct = cart.find(element => element.id == product.id)
            cartProduct.cant += product.cant
            if(cartProduct.cant > product.quantity){
                toast("Has excedido la cantidad de productos que hay en stock")
            }else{
                let index = cart.indexOf(cartProduct)
                cart[index].cant = cartProduct.cant
                toast("Cantidad actualizada")
            }   
        }else{
            setCart([...cart, checkProductPrice(product)])
            toast("Producto Agregado a Carrito")
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