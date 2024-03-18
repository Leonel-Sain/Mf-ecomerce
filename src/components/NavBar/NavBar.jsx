import CartWidget from "../CartWidget/CartWidget";
import LogoMain from "../LogoMain/LogoMain";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top shadow mb-5 bg-body rounded  pb-0 pt-0">
            <div className="container-fluid d-flex justify-content-between">
                <Link to="/" className="navbar-brand"><LogoMain /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <div className="navbar-nav me-auto">
                        <NavLink to={`/category/Quimicos`} className={({ isActive }) => isActive ? "nav-link btn btn-outline-info ActiveOption mx-2 pt-2" : "nav-link btn btn-outline-info Option mx-2 pb-2"}>Quimicos</NavLink>
                        <NavLink to={`/category/Accesorios`} className={({ isActive }) => isActive ? "nav-link btn btn-outline-info ActiveOption mx-2 pt-2" : "nav-link btn btn-outline-info Option mx-2 pb-2"}>Material de limpieza</NavLink>   
                        <Link to="/nosotros" className=" nav-link btn btn-outline-info  mx-2 pt-2">Nosotros</Link>
                    </div>
                     
                   {/*  <form className="d-flex me-4 " role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-info" type="submit">Search</button>
                    </form> */}
                </div>
                <div className="pt-3 pb-3">
                <button className="btn btn-outline-info me-3"><CartWidget /></button>
                </div>
                
            </div>
        </nav>
    );
}

export default NavBar;

