import { createContext, useContext, useState } from "react"


export const CartContext = createContext()
// logica de carrito de compras
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart((prev) => [...prev, productToAdd])
        } else {
            console.error("El producto ya esta en el carrito")
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    //limpiar carrito 
    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }
    //carrito vacio
    const clearCart = () => {
        setCart([])
    }
    //total de productos en el carrito
    const getTotalQuantity = () => {
        let accu = 0;
        cart.forEach(prod => {
            accu += prod.quantity
        })
        return accu
    }
     const  getPriceTotal = () =>{
        let accu = 0;
        cart.forEach((prod)=>{
            accu += prod.quantity * prod.price
        }) 
        return accu
     }

    const totalQuantity = getTotalQuantity ()


    return(
        <CartContext.Provider value={{cart, isInCart, addItem, removeItem, clearCart, totalQuantity, getPriceTotal}}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => {
    return useContext(CartContext)
}











