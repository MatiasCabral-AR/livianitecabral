import { useContext } from "react";
import CartContext from "../../context/CartContext";

const DivLogo = (props) => {
    let quantity = useContext(CartContext).cart.length
    return  (
                <div>
                    {quantity}
                    <i className={props.logoprops}></i> 
                </div>
            )
}
export default DivLogo