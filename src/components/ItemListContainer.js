import "../App.css";

const ItemListCointainer = ({greeting}) => {
    return (
        <div className="itemListContainer">
            <h2>{greeting}</h2>
            <h6>Acá podrás encontrar todo lo que necesitas al mejor precio!</h6>
        </div>
    )
}

export default ItemListCointainer;