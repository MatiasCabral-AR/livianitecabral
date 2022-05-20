import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = (props) => {
    return (
    <section className='d-flex flex-column'>
        <h1 className="f-vladimir display-2 text-center">{props.title}</h1>
        <ItemCount initial='0' stock='10'/>
    </section>
    )
}
export default ItemListContainer