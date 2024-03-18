import { useCart } from "../../context/CartContext"
import cart from"../assets/cart.svg"

const CartWidget = () => {
  const {totalQuantity} = useCart()
  return (
    <div style={{color:"black"}}>
    {/*   <Link to="/cart" style={{ display: totalQuantity > 0 ? "block" : "none"}}></Link> */}
        <img style={{width:20,color:"black"}} src={cart} />
        {totalQuantity} 
    </div>
  )
}

export default CartWidget


