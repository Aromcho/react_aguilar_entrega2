import React from "react";
import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  console.log('Productos en ItemList:', productos);

  return (
    <div className="item-list">
      {productos?.length > 0 ? (
        productos.map((producto) => (
          <Item  producto={producto} key={producto.id}/>
        ))
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default ItemList;