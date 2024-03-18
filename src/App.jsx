import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Banner from './components/Banner/Banner'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import { CartProvider } from "./context/CartContext"
import Cart from "./components/cart/Cart"
import Checkout from "./components/Checkout/Checkout"


function App() {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Banner greeting={"Productos de Limpieza"} />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos"} />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Bienvenidos"} />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
