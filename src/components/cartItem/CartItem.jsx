
import { useCart } from "../../context/CartContext"
import "./CartItem.css"
const CartItem = ({ id, name, price, img, stock, quantity }) => {
    console.log(img);
    const { removeItem } = useCart()
    const handleRemove = (id) => {
        removeItem(id)
    }
    return (

        <div className="container text-center clearfix cartItemClass">
            <div className="row align-items-start">
                <div className="col">
                    <img className="img-fluid col-md-6 float-md-end mb-3 ms-md-3" src={img} alt={name} />
                </div>
                <div className="col">
                    <h6>{name}</h6>
                </div>
                <div className="col">
                    <p>Cantidad: {quantity}</p>
                </div>
                <div className="col">
                    <p>Precio x unidad: $ {price}</p>
                </div>
                <div className="col">
                    <p>Subtotal: $ {price * quantity}</p>
                </div>
                <div className="col">
                    <footer className="d-flex flex-column justify-content-between">
                        <button className="btn btn-outline-info " onClick={() => handleRemove(id)}>X</button>
                    </footer>
                </div>
            </div>
        </div>





    )
}

export default CartItem