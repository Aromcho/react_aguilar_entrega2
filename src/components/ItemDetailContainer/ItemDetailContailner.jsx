import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import obtenerProductos from "../../utilidades/data";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    obtenerProductos
      .then((respuesta) => {
        const productoEncontrado = respuesta.find(
          (productoData) => productoData.id === productId
        );
        setProducto(productoEncontrado);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
      });
  }, [productId]);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;

