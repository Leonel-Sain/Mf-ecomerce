import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams} from "react-router-dom"

const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null)

    const {itemId} = useParams()
    console.log("parametros", itemId)
    useEffect(() => {
        getProductsById(itemId)
            .then(response => {
                setProducts(response)
                console.log(response);
            })
            
            .catch(error => {
                console.error(error)
            })
    }, [itemId])
   
    return (
        <div className="container row row-cols-2 mx-auto">
            <ItemDetail {...products} />
        </div>
    )
}
export default ItemDetailContainer