import { useState, useEffect } from "react";
import obtenerProductos from "../utilidades/data";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    obtenerProductos()
      .then((respuesta) => {
        setLoading(false);

        // Mostrar todos los productos
        setProductos(respuesta);

        // Ejemplo: Buscar un producto específico (Duke-390)
        const productoEncontrado = respuesta.find(
          (productoData) => productoData.id === "Duke-390"
        );
        console.log(productoEncontrado);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
        setLoading(false);
      });
  }, []);  // Sin dependencias para que se ejecute solo una vez al montar el componente

  return (
    <div>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div>
          {/* Muestra los productos o un mensaje de que no hay productos */}
          {productos.length > 0 ? (
            productos.map((producto) => (
              <ItemDetail key={producto.id} producto={producto} />
            ))
          ) : (
            <p>No hay productos disponibles.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;

