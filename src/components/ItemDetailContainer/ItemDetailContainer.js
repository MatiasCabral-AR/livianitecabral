import { useEffect, useState, React } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getDoc, doc } from "firebase/firestore";
import { database } from "../../firebase";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const {id} = useParams()
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setLoad(true)
        getDoc(doc(database, 'products', id))
        .then(result => {
            const product = { id : result.id, ...result.data()}
            setProduct(product)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setLoad(false)
        }) 
    }, [id])
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