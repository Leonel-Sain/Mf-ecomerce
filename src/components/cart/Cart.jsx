import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../cartItem/CartItem"
const Cart = () => {
  const { cart, clearCart, totalQuantity, getPriceTotal, } = useContext(CartContext)


  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to="/" className="Option btn btn-outline-info -">Productos</Link>
      </div>
    )
  }
const total= getPriceTotal ()

  return (
    <div>
      {cart.map(p => <CartItem key={p.id} {...p} />)}
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()} className="btn btn-outline-info mb-2" >Vaciar carrito</button>
      <Link to="/checkout" className="Option btn btn-outline-info mb-2">Checkout</Link>
    </div>
  )
}

export default Cart
