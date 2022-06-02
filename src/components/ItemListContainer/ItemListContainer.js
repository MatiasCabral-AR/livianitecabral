import { useEffect, useState } from "react"
import CustomFetch from "../../utilities/CustomFetch"
import products from "../../utilities/products"
import ProductList from "../ProductList/ProductList"


const ItemListContainer = (props) => {
    const [productsArray, setProducts] = useState([])

    useEffect(() => {
        CustomFetch(2000, products)
        .then(result => setProducts(result))
    }, [productsArray])

    return (
    <section className='d-flex flex-column'>
        <h1 className="f-vladimir display-2 text-center">{props.title}</h1>
        <div className="d-flex"><ProductList products={productsArray}/></div>
    </section>
    )
}
export default ItemListContainer