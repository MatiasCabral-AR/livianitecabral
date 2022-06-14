import { useContext } from "react";
import CartContent from "../CartContent/CartContent";
import CartPayment from "../CartPayment/CartPayment";
import './Cart.css';
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

function Cart(){
    const {cart} = useContext(CartContext)

    return(
        <>
        <p className="cart-title">Carrito</p>
        <div className="cart">
            <div className='cart-details d-flex flex-column'>
                <p>Detalles del Carrito</p>
                <hr/>
                {cart.length > 0 ? <CartContent/> : <div><p>No hay productos en el carrito</p><Link to='/' className='text-decoration-none'><button className="cart-payment-buyButton-button">Volver al inicio</button></Link></div>}
            </div>
            <CartPayment/>
        </div>
        </>
    )
}

export default Cart