import React from 'react';

const ItemListContainer = ({ greetings }) => {
  return (
    <div className="item-list-container">
      <h2>{greetings}</h2>
    </div>
  );
};

export default ItemListContainer;