function checkProductPrice(product){
    if(product.discount > 0){
        product.price = product.price - (product.price * product.discount / 100)
    }
    return product
}

export default checkProductPrice;