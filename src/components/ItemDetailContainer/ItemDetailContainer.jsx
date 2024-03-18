import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams} from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()
    
/*     console.log("parametros", itemId) */
    useEffect(() => {
        getDoc(doc(db,"products", itemId))
        .then((response) => {
          const product = {id: response.id, ...response.data()}
          setProducts(product)
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            setLoading(false)
        })
    /*     getProductsById(itemId)
            .then(response => {
                setProducts(response)
                console.log(response);
            })
            
            .catch(error => {
                console.error(error)
            })
             */
    }, [itemId])
  /*   if(loading) {
        return <h1>Cargando...</h1>
    } */
    return (
        <div className="container row row-cols-2 mx-auto">
            {loading ? <h1>Cargando...</h1> : <ItemDetail {...products} /> }
            
        </div>
    )
}
export default ItemDetailContainer