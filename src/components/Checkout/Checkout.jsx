import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import {useForm} from "react-hook-form"
import {collection, addDoc} from "firebase/firestore"
import { db } from "../../services/firebase"
const Checkout = () => {
    const [pedidoId, setPedidoId] = useState ("")

    const { cart, clearCart, totalQuantity, getPriceTotal, } = useContext(CartContext)

    const {register, handleSubmit} = useForm()

    const comprar = (data) =>{
      const pedido ={
        cliente: data,
        productos:cart,
        total:getPriceTotal(),
        productTotal:totalQuantity
      }
      console.log(pedido);
      const pedidosRef = collection(db,"pedidos");

      addDoc(pedidosRef, pedido)
      .then((doc) =>{
        setPedidoId(doc.id)
        clearCart()
      })
    }

    if (pedidoId){
       return(
        <div className="container">
          <h1 className="main-title">Muchas gracias por su compra</h1>
          <p>Tu numero de pedido es: {pedidoId}</p>
        </div>
       )
    }

  return (
    <div>
      <div className="container ">
        <h1 className="main-title">Finalizar compra</h1>
        <form className="formulario form-label" onSubmit={handleSubmit (comprar)}>
          <input type="text" className="form-label"  placeholder="Ingresa tu nombre" {...register("nombre")}/>
          <input type="text"  className="form-label" placeholder="Ingresa tu e-mail"{...register("email")} />
          <input type="text"  className="form-label" placeholder="Ingresa tu telefono"{...register("telefono")} />
          <button className="enviar" type="submit">Comprar</button>
        </form>
      </div>

    </div>
  )
}

export default Checkout
