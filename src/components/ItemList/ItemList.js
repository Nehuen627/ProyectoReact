import Item from "../Item/Item";


const ItemList = ({productos}) => {
    return (
        <div className="d-flex justify-content-around aling-items-center flex-wrap col-md-8">
            {productos.map((prod) => <Item key={prod.id} prod={prod}/>)}
        </div>
    )
}

export default ItemList