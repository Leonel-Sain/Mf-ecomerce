import ItemCount from "../ItemCount/ItemCount"
import "../Item/Item.css"
const ItemDetail = (products) => {
    return (

        <div className="container" >
            <article className="card text-center shadow-sm my-5 rounded-3  bg-body  " style={{ height: "90%" }} >
                <header className="fondoCeleste card-header " >
                    <h4 className="card-title mt-2"> {products.name}</h4>
                </header>
                <div className="card-body d-flex flex-column justify-content-between" style={{ height: "90%" }}>
                    <picture className="d-flex align-items-center" style={{ flex: "1 1 auto", overflow: "hidden" }}>
                        <img className="img-fluid" src={products.img} alt={products.name} />
                    </picture>
                    <section className="card-text">
                        <p className="mb-0" > $ {products.price}</p>
                        <small className="text-muted">Stock Disponible: {products.stock}</small>
                        <p className="text-muted">{products.description}</p>
                    </section>

                    <footer >
                        <ItemCount initial={1} stock={20} onAdd={(count) => console.log("Cantidad agregada", count)} />
                    </footer>
                </div>
            </article>
        </div>



    )
}

export default ItemDetail