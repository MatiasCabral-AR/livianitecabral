import {Container, Button} from 'react-bootstrap';
import React, {useState} from 'react';

const ItemCount = (props) => {    
    // Destructuring usestate to use value and function inside it
    const [cant, itemCant] = useState(parseInt(props.initial))
    
    function decrementCant(){
        if(cant > 0){
            itemCant(prevCant => prevCant - 1)
        }
    }
    
    function incrementCant(){
        if(cant < parseInt(props.stock)){
            itemCant(prevCant => prevCant + 1)
        }
    }
    
    return (
        <Container className='d-flex justify-content-center'>
            <Button size='lg' onClick={decrementCant} variant="dark">-</Button>
            <span className='mx-4 display-4'>{cant}</span>
            <Button size='lg' onClick={incrementCant} variant="dark">+</Button>
        </Container>
    )
}

export default ItemCount;