function productCheck(array, element){
    for(let i = 0; i < array.length; i++){
        if(array[i].id === element.id){
            return true
        }
    }
    return false
}
export default productCheck;