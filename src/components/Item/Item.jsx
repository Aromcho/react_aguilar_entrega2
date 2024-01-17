import React from "react";

const Item = ({ producto }) => {
  return (
    <div className="item">
      <img className="img-productos" src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <button>ver mas</button>
    </div>
  );
};

export default Item;