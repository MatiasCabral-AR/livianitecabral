import { useEffect, useState, React } from "react"
import products from "../../utilities/products";
import CustomFetch from "../../utilities/CustomFetch";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import getProductById from "../../utilities/getProductById";
import Loader from "../Loader/Loader";


const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState([])
    const {id} = useParams()
    const [load, setLoad] = useState(true)

    useEffect(() => {
        CustomFetch(2000, getProductById(products, id))
        .then(result => setProduct(result)).finally(() => {setLoad(false)})
    }, [])
    if(load){
        return(
            <section className='d-flex flex-column'>
                <Loader/>
            </section>
        )
    }
    return(
        <section className='d-flex flex-column'>
            <div className="d-flex justify-content-center"><ItemDetail {...product}/></div>
        </section>
    )
    
}

export default ItemDetailContainer;