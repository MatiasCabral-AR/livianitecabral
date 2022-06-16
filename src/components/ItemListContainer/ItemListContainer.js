import { useEffect, useState, React } from "react"
import { getDocs, collection, query, where } from "firebase/firestore"
import ProductList from "../ProductList/ProductList"
import Loader from "../Loader/Loader"
import { useParams } from "react-router-dom"
import { database } from "../../firebase"


const ItemListContainer = ({title, setCart}) => {
    const [productsArray, setProducts] = useState([])
    const {category} = useParams()
    const [load, setLoad] = useState(true) 

    useEffect(() => {
        setLoad(true)
        // Definimos variable de referencia segun ternario (si hay categoria buscamos con query, sino mostramos todo)
        const collectionReference = (category ? (category === 'Sale' ? query(collection(database, 'products'), where('discount' , '>', 0)) : query(collection(database, 'products'), where('category' , '==', category))) : collection(database, 'products'))
        getDocs(collectionReference).then(result => {
            const products = result.docs.map(doc => {
                return {id : doc.id, ...doc.data()}
            })
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {setLoad(false)})
    }, [category])
    // Definimos titulo por defecto (Nuestros Productos) o titulo de categoria a mostrar
    let titulo = title ? title : `${category}`
    // Ternario que define el render segun el estado de (load)
    if(load){ 
        return(
        <section className='d-flex flex-column justify-content-center align-items-center'>
            <h1 className="f-futurismL display-2 text-center text-dark">{titulo}</h1>
            <Loader/>
        </section>
    )}
    return(<section className='d-flex flex-column justify-content-center align-items-center'>
                <h1 className="f-futurismL display-2 text-center text-dark">{titulo}</h1>
                <ProductList products={productsArray} setCart={setCart}/>
            </section>
    )   
}
export default ItemListContainer