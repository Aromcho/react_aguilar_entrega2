import React from 'react';
import "./ItemDetail.css"

const ItemDetail = ({ producto }) => {
  return (
    <div className="ItemDetail">
      <div className='parte-izquierda'>
      <img className="img-detail" src={`${import.meta.env.BASE_URL}${producto.imagen}`} alt={producto.id} />
      <p>{producto.id}</p>
      <p>${producto.precio}</p>
      </div>
      <div className="ficha" dangerouslySetInnerHTML={{ __html: producto.ficha }} />
    </div>
  );
};

export default ItemDetail;
