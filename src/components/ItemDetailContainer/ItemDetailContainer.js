import { useEffect, useState, React } from "react"
import products from "../../utilities/products";
import CustomFetch from "../../utilities/CustomFetch";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        CustomFetch(2000, products[0])
        .then(result => setProduct(result))
    }, [])

    return(
        <section className='d-flex flex-column'>
            <h1 className="f-vladimir display-2 text-center">{props.title}</h1>
            <div className="d-flex justify-content-center"><ItemDetail product={product}/></div>
        </section>
    )
    
}

export default ItemDetailContainer;