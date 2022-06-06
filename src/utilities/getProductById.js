function getProductById(array, id){
    return(
        array.find(product => product.id === id)
    )
}
export default getProductById