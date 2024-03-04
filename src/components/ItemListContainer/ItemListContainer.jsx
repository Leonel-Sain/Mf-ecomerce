import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
const ItemListContainer = ({greeting}) =>{

    const [products, setProducts] = useState([])

    useEffect (() => {
        getProducts()
        .then(response => {
            setProducts(response)
        }) 
        .catch( error => {
            console.error(error)
        })
    }, [])
    return (
        <div className="container">
            <br/>
            <br/>
            <h1 className="d-flex justify-content-center">{greeting}</h1>
            <hr/>
            <br />
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer