import { Button, Card } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useCartContext } from "../../Context/CartContext"



const ItemDetail = ({producto}) => {
    const { addItem } = useCartContext();
    const [isAdded, setIsAdded] = useState(false);

    const onAdd = (cantidad) => {
        setIsAdded(true);
        addItem(producto, cantidad);
    }

    return (
        <div>
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={producto.Img}/>
                <Card.Body>
                    <Card.Title>{producto.name}</Card.Title>
                    <Card.Text>{producto.description}</Card.Text>
                    <Card.Text>${producto.price}</Card.Text>
                    { isAdded ? 
                        <div>
                            <Button as={Link} to="/cart">Terminar mi compra</Button>
                            <Button as={Link} to="/">Seguir comprando</Button>
                        </div>
                        :
                        <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
                    }
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail