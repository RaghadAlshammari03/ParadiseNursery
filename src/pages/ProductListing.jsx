import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { products } from '../data/products';
import '../styles/ProductListing.css';

function ProductListing() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  // Group products by each category
  const groupedProducts = products.reduce((groups, product) => {
    product.categories.forEach(category => {
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(product);
    });
    return groups;
  }, {});

  return (
    <div className="product-listing">
      <h2>Our House Plants</h2>
      {Object.entries(groupedProducts).map(([category, products]) => (
        <div key={category} className="category-group">
          <h3>{category}</h3>
          <div className="product-cards">
            {products.map(product => {
              const isInCart = cartItems.some(item => item.id === product.id);
              return (
                <div key={product.id} className="product-card">
                  <img src={product.thumbnail} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>${product.price.toFixed(2)}</p>
                  <p>{product.description}</p>
                  <button 
                    onClick={() => dispatch(addToCart(product))} 
                    disabled={isInCart}
                  >
                    {isInCart ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;
