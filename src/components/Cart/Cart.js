import { useContext } from "react";
import CartContent from "../CartContent/CartContent";
import CartPayment from "../CartPayment/CartPayment";
import './Cart.css';
import CartContext from "../../context/CartContext";

function Cart(){
    return(
        <>
        <p className="cart-title">Carrito</p>
        <div className="cart">
            <div className='cart-details d-flex flex-column'>
                <p>Detalles del Carrito</p>
                <hr/>
                <CartContent/>
            </div>
            <CartPayment/>
        </div>
        </>
    )
}

export default Cart