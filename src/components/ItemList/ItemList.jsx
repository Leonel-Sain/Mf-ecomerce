import Item from "../Item/Item"
const ItemList = ({products}) => {
  console.log(products,"ssssaasdjasopdasd");
  return (
    
        <div className="row row-cols-2  " >
           {products.map(prod => <Item  key={prod.id} id={prod.id} name={prod.name} img={ prod.img} description={prod.description} price={prod.price} stock={prod.stock}/>)}
        </div>
  )
}

export default ItemList
