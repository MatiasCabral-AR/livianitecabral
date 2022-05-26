import { useEffect, useState } from "react"
import CustomFecth from "../../utilities/CustomFetch"
import products from "../../utilities/products"
import ProductList from "../ProductList/ProductList"


const ItemListContainer = (props) => {
    const [productArray, setProduct] = useState([])

    useEffect(() => {
        CustomFecth(2000, products)
        .then(result => setProduct(result))
    }, [productArray])

    return (
    <section className='d-flex flex-column'>
        <h1 className="f-vladimir display-2 text-center">{props.title}</h1>
        <div className="d-flex"><ProductList products={productArray}/></div>
    </section>
    )
}
export default ItemListContainer