import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import '../styles/ShoppingCart.css';

function ShoppingCart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const totalCost = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.items.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.name} />
            <div className="item-details">
              <h4>{item.name}</h4>
              <p>Unit Price: ${item.price.toFixed(2)}</p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              <div className="quantity-controls">
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              </div>
              <button className="delete-button" onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
            </div>
          </div>
        ))
      )}
      <div className="cart-summary">
        <h3>Total Items: {cart.totalQuantity}</h3>
        <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
      </div>
      <div className="cart-actions">
        <button className="checkout-button" onClick={() => alert('Coming Soon')}>
          Checkout
        </button>
        <Link to="/products">
          <button className="continue-button">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCart;
