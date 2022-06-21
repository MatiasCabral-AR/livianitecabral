import React from 'react'
import { useFormik } from 'formik'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { addDoc, collection, documentId, getDocs, query, where, writeBatch} from 'firebase/firestore'
import { database } from '../../firebase'
import Swal from 'sweetalert2';


function ClientForm({close}) {
    const {cart, setCart} = useContext(CartContext)
    const productIds = cart.map( prod => prod.id)
    const batch = writeBatch(database)
    const outOfStock = []
    function clearCart(cart, outOfStock){
        outOfStock.forEach( productOutOfStock => {
            cart = cart.filter( product => product.id != productOutOfStock.id)
        })
        return cart
    }
    const form = useFormik({
        initialValues: {
            name: '',
            email: '',
            number: ''
        },
        onSubmit: values => {
            const productsReference = collection(database, 'products')
            const ordersReference = collection(database, 'orders')
            getDocs(query(productsReference, where(documentId(), 'in', productIds)))
            .then( response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const productQuantity = cart.find(prod => prod.id === doc.id)?.cant
                    if(dataDoc.stock >= productQuantity){
                        batch.update(doc.ref, {stock : dataDoc.stock - productQuantity})
                    }else{
                        outOfStock.push({id : doc.id, ...dataDoc})
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0){
                    let total = 0;
                    cart.forEach(element => {
                    total = total += (element.price*element.cant)})
                    const order = {data: form.values, products: cart, total: total}
                    return addDoc(ordersReference, order)
                }else{
                    return Promise.reject({type : 'out_of_stock' , products : outOfStock})
                }
            }).then(({id}) =>{
                batch.commit()
                Swal.fire({
                    icon: 'success',
                    title: 'Orden Enviada',
                    text: `Su orden con id : ${id}, ha sido generada. Pronto uno de nuestros asesores comerciales se comunicara con usted`
                  })
                setCart([])
            }).catch( error =>{
                if(error.type === 'out_of_stock'){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops ...',
                        text: `Algunos de nuestros productos se quedaron sin stock mientras usted realizaba la compra, hemos actualizado el carrito con los productos que aun tenemos en stock.`
                      })
                    setCart(clearCart(cart, outOfStock))
                    close()
                }
            })
        }
    })


return (
        <form onSubmit={form.handleSubmit}>
            <div className='d-flex flex-column'>
                <label className='text-light' htmlFor='name'>Nombre : </label>
                <input className='bg-dark text-light' type="text" id='name' name='name' onChange={form.handleChange} value={form.values.name}/>
            </div>
            <hr/>
            <div className='d-flex flex-column'>
                <label className='text-light' htmlFor='email'>Email</label>
                <input className='bg-dark text-light' type="email" id='email' name='email' onChange={form.handleChange} value={form.values.email} />
            </div>
            <hr/>
            <div className='d-flex flex-column'>
                <label className='text-light' htmlFor='number'>Numero de Telefono : </label>
                <input className='bg-dark text-light' type="numer" id='number' name='number' onChange={form.handleChange} value={form.values.number}/>
            </div>
            <hr/>
            <button className='cart-button w-100' type='submit'>Aceptar</button>
        </form>
  )
}

export default ClientForm