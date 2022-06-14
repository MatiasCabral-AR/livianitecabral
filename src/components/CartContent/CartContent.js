import { Button } from "bootstrap";
import CartContext from "../../context/CartContext";
import { useContext } from "react";




function CartContent(){
    const {cart, setCart} = useContext(CartContext)

    function deleteProduct(product){
        let hardCopy = [...cart]
        console.log(hardCopy)
        hardCopy = hardCopy.filter((cartItem)=> cartItem.id !== product.id )
        setCart(hardCopy)
    }

    return(
        cart.map(product => 
            <div key={product.id} className="cart-product">
                <span className="cart-product-img">
                    <img src={product.src1}alt="Imagen de Producto"/>
                </span>
                <div className="cart-product-info">
                    <p className="cart-product-info-name">{product.name}</p>
                    <p className="cart-product-info-unitPrize">${product.price}</p>
                </div>
                <div className="cart-product-quantity">
                    <p className="cart-product-quantity-title">Cantidad de Productos</p>
                    <p className="cart-product-quantity-title">{product.cant}</p>
                </div>
                <div className="cart-product-price">
                    <p>Total Producto</p>
                    <p className="cart-product-price-total">${(product.price*product.cant)}</p>
                </div>
                <div className="cart-product-buttons">
                    <button className="cart-payment-buyButton-button" onClick={() => {deleteProduct(product)}}>BORRAR PRODUCTO</button>
                </div>
            </div>
            )
    )
}

export default CartContent