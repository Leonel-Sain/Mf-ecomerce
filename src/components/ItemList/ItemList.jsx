import Item from "../Item/Item"
import { memo } from "react"
const ItemList = ({products}) => {

  return (
    
        <div className="row row-cols-2  " >
           {products.map(prod => <Item  key={prod.id} id={prod.id} name={prod.name} img={ prod.img} description={prod.description} price={prod.price} stock={prod.stock}/>)}
        </div>
  )
}

export default memo (ItemList)
/* import Item from "../Item/Item"
import { memo } from "react"

const ItemList = ({ products }) => {
  return (
    <div className="row row-cols-2">
      {Array.isArray(products) && products.map(prod => (
        <Item
          key={prod.id}
          id={prod.id}
          name={prod.name}
          img={prod.img}
          description={prod.description}
          price={prod.price}
          stock={prod.stock}
        />
      ))}
    </div>
  )
}

export default memo(ItemList)
 */