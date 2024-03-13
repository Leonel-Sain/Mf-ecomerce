import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Banner from './components/Banner/Banner'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Banner greeting={"Productos de Limpieza"} />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos"} />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Bienvenidos"} />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>}/> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
