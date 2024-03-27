import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import "./ItemListContainer.css"
import { db } from "../../services/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)
        const collectionRef = categoryId
            ? query(collection(db, "products"), where("categoryId", "==", categoryId))
            : collection(db, "products")


        getDocs(collectionRef)
            .then((response) => {

                const products = response.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
                setProducts(products)
            }).catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])
    if (loading) {
        return <h1>Cargando Productos...</h1>
    }

    return (
        <div className="container BgItemListContainer mb-5 mt-5 ">
            <h1 className="d-flex justify-content-center pt-4 pb-2">{greeting}</h1>
            <div className="line">
            </div>
            <ItemList products={products} />
        </div>
    )
}
export default ItemListContainer 