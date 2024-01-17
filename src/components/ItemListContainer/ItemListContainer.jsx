import React, { useEffect, useState } from 'react';
import obtenerProductos from '../../utilidades/data';
import ItemList from '../ItemList/ItemList';
import '../ItemListContainer/ItemListContainer.css';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { product } = useParams();

  useEffect(() => {
    obtenerProductos()
      .then((respuesta) => {
        console.log('Datos de productos:', respuesta);
        const productosFiltrados = product
          ? respuesta.filter((producto) => producto.categoria.id === product)
          : respuesta;
        setProductos(productosFiltrados);
      })
      .catch((error) => {
        console.error('Error al obtener productos:', error);
      });
  }, [product]);

  return (
    <div className="item-list-container">
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
