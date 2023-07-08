import { Minecart } from 'react-bootstrap-icons';
import "../App.css";

const CardWidget = () => {
    const totalProductos = 0;
    return (
        <div className='Carrito'>
            <Minecart/>
            <h5>{ totalProductos }</h5>
        </div>
    )
}
export default CardWidget;