import React from 'react';
import { useSelector } from 'react-redux';

const CartIcon = () => {
  const count_products = useSelector((state) => state.bag.length);
  const open = () => {
    document.querySelector('.bag').style.display = 'flex';
  };
  const hideCounter = document.querySelector('.countIcon');

  if (count_products) {
    hideCounter.style.display = 'block';
  }

  return (
    <div className="cart-icon" onClick={() => open()}>
      <span className="countIcon">
        {count_products === 0 ? '' : count_products}
      </span>
    </div>
  );
};

export default CartIcon;
