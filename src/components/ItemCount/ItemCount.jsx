import { useState } from "react"


const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    const increment = () =>{
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () =>{
        if (count > 1) {
            setCount(count - 1)
        }
    }
  return (
    <div>
      <div>
            <button onClick={increment}> + </button>
            <h4>{count}</h4>
            <button onClick={decrement}> - </button>
      </div>
      <div>
        <button onClick={() => onAdd(count)} disabled={!stock}>
            Agregar al carrito
        </button>

      </div>
    </div>
  )
}

export default ItemCount
