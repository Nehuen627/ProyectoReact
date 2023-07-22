import { useEffect, useState } from "react";
import "../../App.css";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../mock/data";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos]= useState([]);
    const [loading, setLoading]= useState([false])
    const {categoryId} = useParams()
    useEffect(() =>{
        setLoading(true)
        getProducts()
        .then((res)=> {
            if(categoryId){
                setProductos(res.filter((item)=> item.category === categoryId))
            }else{
                setProductos(res)
            }
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    }, [categoryId])


    return (
        <div>
            {
                loading ? <h1 className="loading">Cargando</h1> : 
                <div className="itemListContainer">
                    <h2>{greeting} <span>{categoryId && categoryId}</span></h2>
                    <ItemList productos={productos}/>
                </div>
            }
        </div>
        
    )
}

export default ItemListContainer;