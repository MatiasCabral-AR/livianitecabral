import { useContext } from "react";
import CartContent from "../CartContent/CartContent";
import CartPayment from "../CartPayment/CartPayment";
import './Cart.css';
import CartContext from "../../context/CartContext";

function Cart(){
    const {cart} = useContext(CartContext)
    return(
        <>
        <p className="cart-title">Carrito</p>
        <div className="cart">
            <div className='cart-details d-flex flex-column'>
                <p>Detalles del Carrito</p>
                <hr/>
                <CartContent cart={cart}/>
            </div>
            <CartPayment cart={cart}/>
        </div>
        </>
    )
}

export default Cart