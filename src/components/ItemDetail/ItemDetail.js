import { Card } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
const ItemDetail = ({producto}) => {
    const onAdd = (cantidad) => {
        console.log(`agregaste ${cantidad} de productos`)
    }
    return (
        <div>
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={producto.img}/>
                <Card.Body>
                    <Card.Title>{producto.name}</Card.Title>
                    <Card.Text>{producto.description}</Card.Text>
                    <Card.Text>${producto.price}</Card.Text>
                    <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail