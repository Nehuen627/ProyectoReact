import { Minecart } from 'react-bootstrap-icons';
import "../../App.css";
import { useCartContext } from '../../Context/CartContext';

const CardWidget = () => {
    const {cartList} = useCartContext()
    const totalProductos = cartList.length;
    
    return (
        <div className='Carrito'>
            <Minecart/>
            <h5 className='CarritoNum'>{ totalProductos }</h5>
        </div>
    )
}
export default CardWidget;