import { useEffect, useContext, useState } from "react"
import CartContext from "../../context/CartContext";

function CartPayment(){
    const {cart, setCart} = useContext(CartContext)
    const [cartTotal, setTotal] = useState(0)
    useEffect(() =>{
        total()
    }, [cart]);
    function total(){
        let totalVal = 0;
        cart.forEach(element => {
            totalVal = totalVal += (element.price*element.cant)})
        setTotal(totalVal)
        }
    //Funcion para borrar el carrito (setearlo)
    function deleteCart(){
        setCart([])
    }

    return(
        <aside className="cart-payment">
            <div className="cart-payment-buyButton">
                <button className="cart-payment-buyButton-button">Comprar</button>
                <button className="cart-payment-buyButton-button" onClick={deleteCart}>Borrar Carrito</button>
            </div>
            <hr/>
            <div className="cart-payment-subTotal">
                <p className="cart-payment-subTotal-title">Sub Total</p>
                <p className="cart-payment-subTotal-price">{cartTotal}</p>
            </div>
            <div className="cart-payment-shipment">
                <div className="cart-payment-shipment-select">
                    <label htmlFor="shipment">Seleccione metodo de Envio : </label>
                    <select name="shipment" id="shipment">
                        <option value="" disabled selected>Tipos de Envio</option>
                        <option value="pick-up">Retiro en Domicilio</option>
                        <option value="oca">Oca</option>
                        <option value="correo-argentino">Correo Argentino</option>
                        <option value="andreani">Andreani</option>
                    </select>
                </div>
                <div className="cart-payment-shipment-cost">
                    <p className="cart-payment-shipment-cost-title">Costo de Envio</p>
                    <p className="cart-payment-shipment-cost-price">$ XXX</p>
                </div>
            </div>
            <hr/>
            <div className="cart-payment-total">
                <p className="cart-payment-total-title">Total a pagar : </p>
                <p className="cart-payment-total-price">$ XXXX</p>
            </div>
            <hr/>
            <div className="cart-payment-links">
                <a href="javascript:void(0)">Metodos de Devolucion</a>
                <a href="javascript:void(0)">Informacion Sobre Envios</a>
            </div>
        </aside>
    )
}
export default CartPayment