import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import data from "../../Firebase/FirebaseConfig";
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading]= useState([false])
    const { id }=useParams()
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const productDoc = doc(data, "items", id);
                const productSnapshot = await getDoc(productDoc);

                if (productSnapshot.exists()) {
                    setProducto({ ...productSnapshot.data(), id: productSnapshot.id });
                } else {
                    console.log("No such product!");
                }
            } catch (error) {
                console.log("Error getting document:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);
    if(loading)return<h2>loading</h2>
    return (
            <div className="d-flex justify-content-center">
                <ItemDetail producto={producto}/>
            </div>

    )
}

export default ItemDetailContainer