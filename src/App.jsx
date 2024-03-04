import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import Banner from './components/Banner/Banner'
import './App.css'

function App() {
  return (
    <>
    <NavBar/>
    <Banner greeting={"Productos de Limpieza"}/>
      <ItemListContainer greeting={"Bienvenidos"} />
      <ItemCount initial={1} stock={20} onAdd={(count) => console.log("Cantidad agregada",count)}/>
     
    </>
  )
}

export default App
