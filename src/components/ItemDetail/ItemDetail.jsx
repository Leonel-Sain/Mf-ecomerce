import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "../Item/Item.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useNotification } from "../../context/Notification";

const ItemDetail = ({ id, name, price, img, stock, description }) => {

  const { addItem, isInCart } = useCart();
  const { setNotification } = useNotification();

  const [addedToCart, setAddedToCart] = useState(isInCart(id));

  const handleAdd = (count) => {
    const productObj = {
      id,
      name,
      price,
      quantity: count,
      img
    };
    addItem(productObj);
    setNotification("success", `Se agregaron ${count} de ${name}`);
    setAddedToCart(true);
  };

  return (
    <div className="container">
      <article className="card text-center shadow-sm my-5 rounded-3 bg-body" style={{ height: "90%" }}>
        <header className="fondoCeleste card-header">
          <h4 className="card-title mt-2">{name}</h4>
        </header>
        <div className="card-body d-flex flex-column justify-content-between" style={{ height: "90%" }}>
          <picture className="d-flex align-items-center" style={{ flex: "1 1 auto", overflow: "hidden" }}>
            <img className="img-fluid" src={img} alt={name} />
          </picture>
          <section className="card-text">
            <p className="mb-0">$ {price}</p>
            <small className="text-muted">Stock Disponible: {stock}</small>
            <p className="text-muted">{description}</p>
          </section>

          <footer>
            {addedToCart ? (
              <div>
                <Link to="/cart" className="btn btn-primary mb-2">Ir al carrito</Link>
                <Link to="/" className="btn btn-primary mb-2">Seguir comprando</Link>
              </div>
            ) : (
              <div>
                <ItemCount initial={1} stock={stock} onAdd={handleAdd} />
              </div>
            )}
          </footer>
        </div>
      </article>
    </div>
  );
};

export default ItemDetail;
