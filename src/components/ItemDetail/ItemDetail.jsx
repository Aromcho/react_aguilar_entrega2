
const ItemDetail = ({ producto }) => {
  
    return (
      <div className="ItemDetail">
        <img src={producto.imagen} alt={producto.id} />
        <p> {producto.id} </p>
        <p> ${producto.precio} </p>
      </div>
    )
  }
  export default ItemDetail