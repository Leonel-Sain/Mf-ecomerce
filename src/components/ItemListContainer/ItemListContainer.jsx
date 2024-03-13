import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

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