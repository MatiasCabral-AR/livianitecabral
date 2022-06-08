const products = [
    {id: 1, name: 'Tanga Triple Tira', price: 1500, discount: 0, src1: '/resources/img/triple-tira-1.jpg', src2: '/resources/img/triple-tira-2.jpg', detail: 'descripcion del producto', quantity: 10, category: 'Lenceria'},
    {id: 2, name: 'Body Encaje y  Microtul', price: 2800, discount: 15, src1: '/resources/img/body-encaje-microtul-1.jpg', src2: '/resources/img/body-encaje-microtul-2.jpg', detail: 'descripcion del producto', quantity: 10, category: 'Lenceria'},
    {id: 3, name: 'Conjunto Encaje con Aro', price: 2000, discount: 0, src1: '/resources/img/encaje-con-aro-1.jpg', src2: '/resources/img/encaje-con-aro-2.jpg', detail: 'descripcion del producto', quantity: 10, category: 'Lenceria'},
    {id: 4, name: 'Conjunto Encaje doble Tira', price: 2800, discount: 0, src1: '/resources/img/encaje-doble-tira-1.jpg', src2: '/resources/img/encaje-doble-tira-2.jpg', detail: 'descripcion del producto', quantity: 10, category: 'Lenceria'},
    {id: 5, name: 'Body Microtul Blanco', price: 2300, discount: 10, src1: '/resources/img/body-microtul-1.jpg', src2: '/resources/img/body-microtul-2.jpg', detail: 'descripcion del producto', quantity: 10, category: 'Lenceria'},
    {id: 6, name: 'Combo Corpiño + Tanga y Vedetina Tiro alto', price: 3200, discount: 15, src1: '/resources/img/combo-1.jpg', src2: '/resources/img/combo-1.jpg', detail: 'descripcion del producto', quantity: 10, category: 'Interior'},
    {id: 7, name: 'Conjunto Corpiño Microtul + Vedetina', price: 1800, discount: 10, src1: '/resources/img/conjunto-microtul-1.jpg', src2: '/resources/img/conjunto-microtul-2.jpg', detail: 'descripcion del producto', quantity: 10, category: 'Interior'},
    {id: 8, name: 'Conjunto Corpiño + Vedetina', price: 1900, discount: 0, src1: '/resources/img/conjunto-1.jpg', src2: '/resources/img/conjunto-2.jpg', detail: 'descripcion del producto', quantity: 10, category: 'Lenceria'},
    {id: 9, name: 'Conjunto Corpiño deportivo + Vedetina', price: 2300, discount: 0, src1: '/resources/img/conjuntoDep-1.jpg', src2: '/resources/img/conjuntoDep-2.jpg', detail: 'descripcion del producto', quantity: 10, category: 'Interior'},
    {id: 10, name: 'Bikini Verde', price: 2400, discount: 0, src1: '/resources/img/bikini-1.jpg', src2: '/resources/img/bikini-2.jpg', detail: 'descripcion del producto', quantity: 10, category: 'Interior'},
    {id: 11, name: 'Vedetina', price: 1000, discount: 10, src1: '/resources/img/vedetina-1.jpg', src2: '/resources/img/vedetina-2.jpg', detail: 'descripcion del producto', quantity: 10, category: 'Interior'},
    {id: 12, name: 'Vedetina Triple Tira', price: 1200, discount: 0, src1: '/resources/img/vedetina-triple-1.jpg', src2: '/resources/img/vedetina-triple-2.jpg', detail: 'descripcion del producto', quantity: 10, category: 'Lenceria'}    
]

export function getProducts(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export function getProductById(id){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id == id))
        }, 2000)
    })
}

export function getProductsByCategory(category){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === category))
        }, 2000)
    })
}

export function getProductsOnSale(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.discount > 0))
        }, 2000)
    })
}