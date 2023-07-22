import Card from 'react-bootstrap/Card';

import ButtonLink from '../ButtonTo';

const Item = ({prod}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prod.img}/>
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Text>${prod.price}</Card.Text>
                    <ButtonLink to={`/item/${prod.id}`}>Más Información</ButtonLink>
                </Card.Body>
            </Card>
        </div>
    )
} 

export default Item