import { Link } from "react-router-dom"
import "./Item.css"
const Item = ({ id, name, price, img, stock }) => {

    return (
        <div className="col-lg-3 ">
            <article className="card text-center shadow-sm mb-1   bg-body " style={{ height: "90%" }} >
                <header className=" fondoCeleste  card-heade" >
                    <h4 className="card-title mt-2"> {name}</h4>
                </header>
                <div className="card-body d-flex flex-column justify-content-between" style={{ height: "90%" }}>
                    <picture className="d-flex align-items-center" style={{ flex: "1 1 auto", overflow: "hidden" }}>
                        <img className="img-fluid" src={img} alt={name} />
                    </picture>
                    <section className="card-text">
                        <p className="mb-0" > $ {price}</p>
                        <small className="text-muted">Stock Disponible: {stock}</small>
                    </section>
                    <footer>
                        <Link to={`/item/${id}`} className="Option  btn btn-primary mb-2"> Ver Detalles</Link>
                    </footer>
                </div>
            </article>
        </div>
    )
}

export default Item

