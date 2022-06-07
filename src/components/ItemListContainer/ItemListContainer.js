import { useEffect, useState } from "react"
import CustomFetch from "../../utilities/CustomFetch"
import products from "../../utilities/products"
import ProductList from "../ProductList/ProductList"
import Loader from "../Loader/Loader"


const ItemListContainer = (props) => {
    const [productsArray, setProducts] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(() => {
        CustomFetch(2000, products)
        .then(result => setProducts(result)).catch(error => {console.log(error)}).finally(() => setLoad(false))
    }, [productsArray])

    if(load){
        return(
            <section className='d-flex flex-column justify-content-center align-items-center'>
                <h1 className="f-vladimir display-2 text-center text-dark">{props.title}</h1>
                <Loader/>
            </section>)
    }
    return (
        <section className='d-flex flex-column justify-content-center align-items-center'>
            <h1 className="f-vladimir display-2 text-center text-dark">{props.title}</h1>
            <ProductList products={productsArray}/>
        </section>
        )

    
}
export default ItemListContainer