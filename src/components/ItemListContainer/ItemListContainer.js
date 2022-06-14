import { useEffect, useState, React } from "react"
import {getProducts, getProductsByCategory, getProductsOnSale} from "../../utilities/products"
import ProductList from "../ProductList/ProductList"
import Loader from "../Loader/Loader"
import { useParams } from "react-router-dom"


const ItemListContainer = ({title, setCart}) => {
    const [productsArray, setProducts] = useState([])
    const {category} = useParams()
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setLoad(true)
        // Si no hay categoria definida, mostrar todos los productos
        if(!category){ getProducts().then(result => setProducts(result)).finally(() => setLoad(false))}
        // Filtro de productos en oferta
        else if(category === 'Ofertas'){ getProductsOnSale().then(result => setProducts(result)).finally(() => setLoad(false))}
        // Filtro de productos por Noombre de Categoria
        else{ getProductsByCategory(category).then(result => setProducts(result)).finally(() => setLoad(false)) }
    }, [category])
    // Definimos titulo por defecto (Livianite Lenceria) o titulo de categoria a mostrar
    let titulo = title ? title : `${category}`
    // Ejecucion de Loader durante el setTimeout
    if(load){
        return(
            <section className='d-flex flex-column justify-content-center align-items-center'>
                <h1 className="f-vladimir display-2 text-center text-dark">{titulo}</h1>
                <Loader/>
            </section>)
    }
    // Retorno una vez que el setTimeout termina
    return (
        <section className='d-flex flex-column justify-content-center align-items-center'>
            <h1 className="f-vladimir display-2 text-center text-dark">{titulo}</h1>
            <ProductList products={productsArray} setCart={setCart}/>
        </section>
        )

    
}
export default ItemListContainer