import { useEffect, useState, React } from "react"
import {getProductById} from "../../utilities/products";
import CustomFetch from "../../utilities/CustomFetch";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import getProducts from "../../utilities/getProducts";
import Loader from "../Loader/Loader";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const {id} = useParams()
    const [load, setLoad] = useState(true)
    console.log(id)

    useEffect(() => {
        getProductById(id)
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