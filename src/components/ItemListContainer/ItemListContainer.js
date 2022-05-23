import { useEffect, useState } from "react"
import customFecth from "../../utilities/customFetch"
import products from "../../utilities/productos"
import ProductCard from "../ProductCard/ProductCard"


const ItemListContainer = (props) => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        customFecth(2000, products)
        .then(result => setProduct(result))
    }, [product])

    return (
    <section className='d-flex flex-column'>
        <h1 className="f-vladimir display-2 text-center">{props.title}</h1>
        <ProductCard />
    </section>
    )
}
export default ItemListContainer