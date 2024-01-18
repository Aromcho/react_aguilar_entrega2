import React from "react";
import "./item.css"

const Item = ({ producto }) => {
  return (
    <div className="item">
      <img className="img-productos" src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.id}</h3>
      <p>Precio: ${producto.precio}</p>
      <button>ver mas</button>
    </div>
  );
};

export default Item;