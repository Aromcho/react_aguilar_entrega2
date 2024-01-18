import { useState, useEffect } from "react";
import obtenerProductos from "../../utilidades/data";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});

  useEffect(() => {
    obtenerProductos
      .then((respuesta) => {
        const productoEncontrado = respuesta.find(
          (productoData) => productoData.id === "Duke-390"
        );
        setProducto(productoEncontrado);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
      })
  }, []) // Sin dependencias para que se ejecute solo una vez al montar el componente

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;

