import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/global.css';

function Header() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">Paradise Nursery</Link>
      </div>
      <div className="header-cart">
        <Link to="/cart">
          <span role="img" aria-label="shopping cart">🛒</span>
          {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
        </Link>
      </div>
    </header>
  );
}

export default Header;
