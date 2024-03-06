import CartWidget from "../CartWidget/CartWidget"
import LogoMain from "../LogoMain/LogoMain"
import { Link ,NavLink } from "react-router-dom"
const NavBar = () => {
    return (
        <> 
            <nav className="navbar navbar-expand-lg  bg-light  p-0 text-dark bg-opacity-10 fixed-top  shadow mb-5 bg-body rounded">
                <div className="container-fluid ">
                    <Link to="/"><LogoMain/></Link >
                    <div>   
                    <NavLink to={`/category/Quimicos`} className={({isActive}) => isActive ? "btn btn-outline-info ActiveOption mx-2": "btn btn-outline-info Option mx-2"}>Quimicos</NavLink>
                    <NavLink to={`/category/Material de limpieza`} className={({isActive}) => isActive ? "btn btn-outline-info ActiveOption mx-2": "btn btn-outline-info Option mx-2"}>Material de limpieza</NavLink>
                    </div>
                    <form class="d-flex" role="search">
                        <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-info" type="submit">Search</button>
                    </form>
                    <div>
                        <button className="btn btn-outline-info"> <CartWidget /></button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar

