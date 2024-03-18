import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"

const CartItem = ({ id, name, price, img, stock,quantity}) => {
    const {removeItem} = useCart()
    const handleRemove = (id) => {
        removeItem(id)
    }
    return (
        <div className="col-lg-3 ">
            <article className="card text-center shadow-sm mb-1   bg-body " style={{ height: "90%" }} >
                <header>
                    <h2>{name}</h2>
                </header>
                <section>
                    <p>Cantidad: {quantity}</p>
                    <p>Precio x unidad: $ {price}</p>
                </section>
                <footer>
                    <p>Subtotal: $ {price * quantity }</p>
                    <button onClick={()=> handleRemove(id)}>X</button>
                </footer>
            </article>
        </div>
    )
}

export default CartItem