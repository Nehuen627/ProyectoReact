import {useState} from 'react';
import { Button } from "react-bootstrap";

const ItemCount = ({stock, onAdd, initial}) => {
    const [count, setCount] = useState(initial);
        const add = () => {
            if(count < stock){
                setCount(count + 1);
            }
        }
        const substract = () => {
            if(count > 0){
                setCount(count - 1);
            }
        }
        
    return (
        <div className='d-grid'>
            <div className="ItemCount">
                <Button className="btnCount" size="lg" variant="danger" onClick={substract} >-</Button>
                <h5>{count}</h5>
                <Button className="btnCount" size="lg" variant="success" onClick={add} >+</Button>
            </div>
            <Button size="lg"variant="dark" disabled={count === 0} onClick={() => {onAdd(count)}}>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount;