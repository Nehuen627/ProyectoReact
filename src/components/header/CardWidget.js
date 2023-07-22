import { Minecart } from 'react-bootstrap-icons';
import "../../App.css";


const CardWidget = () => {
    const totalProductos = 0;
    return (
        <div className='Carrito'>
            <Minecart/>
            <h5 className='CarritoNum'>{ totalProductos }</h5>
        </div>
    )
}
export default CardWidget;