import { useEffect, useState, React } from "react"
import {getProducts, getProductsByCategory, getProductsOnSale} from "../../utilities/products"
import ProductList from "../ProductList/ProductList"
import Loader from "../Loader/Loader"
import { useParams } from "react-router-dom"


const ItemListContainer = ({title}) => {
    const [productsArray, setProducts] = useState([])
    const {category} = useParams()
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setLoad(true)
        if(!category){ getProducts().then(result => setProducts(result)).finally(() => setLoad(false))}
        else if(category === 'Ofertas'){ getProductsOnSale().then(result => setProducts(result)).finally(() => setLoad(false))
        }else{ getProductsByCategory(category).then(result => setProducts(result)).finally(() => setLoad(false)) }
    }, [category])
    let titulo = title ? title : `${category}`
    if(load){
        return(
            <section className='d-flex flex-column justify-content-center align-items-center'>
                <h1 className="f-vladimir display-2 text-center text-dark">{titulo}</h1>
                <Loader/>
            </section>)
    }
    return (
        <section className='d-flex flex-column justify-content-center align-items-center'>
            <h1 className="f-vladimir display-2 text-center text-dark">{titulo}</h1>
            <ProductList products={productsArray}/>
        </section>
        )

    
}
export default ItemListContainer