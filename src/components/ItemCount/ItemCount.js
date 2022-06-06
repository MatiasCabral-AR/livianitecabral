import {Container, Button} from 'react-bootstrap';
import React, {useState} from 'react';
import './ItemCount.css'

const ItemCount = ({initial, stock, onAdd, buttonDisplay, buttonText}) => {
    const [cant, itemCant] = useState(parseInt(initial))
    
    function decrementCant(){
        if(cant > 0){
            itemCant(prevCant => prevCant - 1)
        }
    }
    
    function incrementCant(){
        if(cant < parseInt(stock)){
            itemCant(prevCant => prevCant + 1)
        }
    }

   const AddQuantity = () => {
        onAdd(cant)
    }
    
    return (
            <div className='d-flex flex-column justify-content-center'>
                <Container className='d-flex justify-content-center'>
                    <Button size='m' onClick={decrementCant} variant="dark">-</Button>
                    <span className='mx-4 display-5 text-light'>{cant}</span>
                    <Button size='m' onClick={incrementCant} variant="dark">+</Button>
                </Container>
                {buttonDisplay === 'true' && <Button onClick={AddQuantity} className="mt-2 cart-button">{buttonText}</Button>}
            </div>
    )
}

ItemCount.defaultProps = {
    initial: '0',
    stock: '10',
    buttonDisplay:'false'
}

export default ItemCount;