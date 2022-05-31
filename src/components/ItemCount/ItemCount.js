import {Container, Button} from 'react-bootstrap';
import React, {useState} from 'react';

const ItemCount = ({initial, stock, onAdd, buttonDisplay, buttonText}) => {    
    // Destructuring usestate to use value and function inside it
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
        <Container className='d-flex flex-column'>
            <Container className='d-flex justify-content-center'>
                <Button size='lg' onClick={decrementCant} variant="dark">-</Button>
                <span className='mx-4 display-4'>{cant}</span>
                <Button size='lg' onClick={incrementCant} variant="dark">+</Button>
            </Container>
            {buttonDisplay === 'true' && <Button onClick={AddQuantity} className="mt-2" variant="primary">{buttonText}</Button>}
        </Container>
    )
}

export default ItemCount;