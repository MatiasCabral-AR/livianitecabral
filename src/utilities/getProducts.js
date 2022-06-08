function getProducts(array, value){
    console.log(value)
    if(value === undefined){
        return array
    }
    else if((parseInt(value)) < array.length){
        return(
            array.find(product => product.id === parseInt(value))
        )
    }else{
        console.log('por categoria')
        return(
            array.filter(product => product.category === value)
        )
    }
}
export default getProducts