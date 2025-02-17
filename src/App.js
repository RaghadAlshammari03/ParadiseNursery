import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductListing from './pages/ProductListing';
import ShoppingCart from './pages/ShoppingCart';
import Header from './components/Header';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;
