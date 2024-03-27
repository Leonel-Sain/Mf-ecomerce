import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Banner from "./components/Banner/Banner";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { NotificationProvider } from "./context/Notification";
import Nosotros from "./components/nosotros/Nosotros";
import ScrollDown from "./components/scrollDown/ScrollDown";
import Login from "./components/login/Login";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const handleLogin = () => {
    setUserLoggedIn(true);
  };

  return (
    <BrowserRouter>
      {!userLoggedIn && <Login onLogin={handleLogin} />}
      {userLoggedIn && (
        <NotificationProvider>
          <CartProvider>
            <NavBar />
            <ScrollDown/>
            <Banner greeting={"Productos de Limpieza"} />
            <Routes>
              <Route path="/" element={<ItemListContainer greeting={"Bienvenidos"} />} />
              <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Bienvenidos"} />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            </Routes>
            <Footer />
          </CartProvider>
        </NotificationProvider>
      )}
    </BrowserRouter>
  );
}

export default App;
