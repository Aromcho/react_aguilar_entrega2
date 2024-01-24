import React from 'react';
import { Link } from 'react-router-dom';
import "./Item.css"

const Item = ({ producto }) => {
  return (
    <div className="Item">

        <img className='img-productos' src={producto.imagen} alt={producto.id} />
        <p> {producto.id} </p>
        <p> ${producto.precio} </p>
        <Link to={`/detalle/${producto.id}`}>ver mas
      </Link>
    </div>
  );
};

export default Item;