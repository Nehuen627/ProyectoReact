import { useEffect, useState } from "react";
import "../../App.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import data from "../../Firebase/FirebaseConfig";
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos]= useState([]);
    const [loading, setLoading]= useState([false])
    const {categoryId} = useParams()


    useEffect(() => {
        const fetchData = async () => {
            const productsCollection = collection(data, "items"); 
            let q;

            if (categoryId) {
                q = query(productsCollection, where("category", "==", categoryId));
            } else {
                q = productsCollection;
            }

            try {
                const querySnapshot = await getDocs(q);
                const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                setProductos(data);
            } catch (error) {
                console.log("Error getting documents: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [categoryId]);

    if(loading)return<h2>loading</h2>
    return (
        <div>
            
                <div className="itemListContainer">
                    <h2>{greeting} <span>{categoryId && categoryId}</span></h2>
                    <ItemList productos={productos}/>
                </div>
            
        </div>
        
    )
}

export default ItemListContainer;