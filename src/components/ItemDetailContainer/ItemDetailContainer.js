import { useEffect, useState, React } from "react"
import products from "../../utilities/products";
import CustomFetch from "../../utilities/CustomFetch";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import getProductById from "../../utilities/getProductById";


const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState([])
    const {id} = useParams()

    useEffect(() => {
        CustomFetch(2000, getProductById(products, id))
        .then(result => setProduct(result))
    }, [])

    return(
        <section className='d-flex flex-column'>
            <h1 className="f-vladimir display-2 text-center text-light">{props.title}</h1>
            <div className="d-flex justify-content-center"><ItemDetail {...product}/></div>
        </section>
    )
    
}

export default ItemDetailContainer;