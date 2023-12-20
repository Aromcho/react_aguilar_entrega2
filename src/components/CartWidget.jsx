import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <div className="cart-widget">
        <span>0</span>
        <FontAwesomeIcon icon={faShoppingCart} /> 
    </div>
  );
};

export default CartWidget;