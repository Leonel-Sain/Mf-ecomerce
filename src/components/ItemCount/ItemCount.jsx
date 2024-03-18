import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"

const ItemCount = ({initial=1, stock, onAdd }) => {
  const value = useContext (CartContext)
  const [count, setCount] = useState(initial)

  const increment = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  return (
    <div>
      <div className="btn btn-primary mb-2">
        <button onClick={decrement} className="btn btn-outline-info mb-2"> - </button>
            <h4 className="btn btn-primary mb-2"> {count}</h4>
        <button onClick={increment} className="btn btn-outline-info mb-2"> + </button>
        
        <button className="btn btn-outline-info mb-2" onClick={() => onAdd(count)} disabled={!stock}>
          Agregar al carrito
        </button>

      </div>
    </div>
  )
}

export default ItemCount
