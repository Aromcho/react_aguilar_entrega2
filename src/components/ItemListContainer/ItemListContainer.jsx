import React, { useEffect, useState } from 'react';
import obtenerProductos from '../../utilidades/data';
import ItemList from '../ItemList/ItemList';
import '../ItemListContainer/ItemListContainer.css';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    obtenerProductos
      .then((respuesta) => {
        if (category) {
          // Filtrar la data
          const productosFiltrados = respuesta.filter((producto) => producto.categoria.id === category);

          // Actualizar rutas de imágenes en productos filtrados
          const productosConRutasActualizadas = productosFiltrados.map((producto) => ({
            ...producto,
            imagen: `${import.meta.env.BASE_URL}${producto.imagen}` // Asegurar ruta completa
          }));

          setProductos(productosConRutasActualizadas);
        } else {
          // Guardar todos los productos
          const productosConRutasActualizadas = respuesta.map((producto) => ({
            ...producto,
            imagen: `${import.meta.env.BASE_URL}${producto.imagen}` // Asegurar ruta completa
          }));

          setProductos(productosConRutasActualizadas);
        }
      })
      .catch((error) => {
        console.error('Error al obtener productos:', error);
      });
  }, [category]);

  return (
    <div className="item-list-container">
      <div>
        <section className='principal'>
          <div className="partner">
            <h1 className="partner-titulo">Lideres en ventas </h1>
            <h3 className="partner-subtitulo">en todo el pais</h3>
          </div>
          <img className='logo1' src="../public/logo-arom.png" alt="" />
        </section>
      </div>
      <h2>Todos los productos</h2>
      {/* Muestra la lista de productos */}
      {productos.length > 0 ? (
        <ItemList productos={productos} />
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default ItemListContainer;
