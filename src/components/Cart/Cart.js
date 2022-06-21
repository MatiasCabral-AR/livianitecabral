import { useContext } from "react";
import CartContent from "../CartContent/CartContent";
import CartPayment from "../CartPayment/CartPayment";
import './Cart.css';
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";


function Cart(){
    const {cart} = useContext(CartContext)

    return(
        <div>
            <p className="cart-title f-futurismL text-center">Carrito</p>
            <div className="cart mx-auto">
                { cart.length === 0 ? 
                <div className="d-flex justify-content-center mx-auto">
                <button className="cart-button"><Link to='/' className="text-decoration-none text-dark">Volver al inicio</Link></button>
                </div> 
                :   <>
                    <div className='cart-details d-flex flex-column'>
                        <hr/>
                        <CartContent/>
                    </div>
                    <CartPayment/>
                    </>
                }
            </div>
        </div>
    )
}

export default Cart