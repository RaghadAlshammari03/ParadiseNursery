import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

function LandingPage() {
  return (
    <div className="landing">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>
          Welcome to Paradise Nursery, your one-stop shop for house plants that beautify your home and purify your air.
        </p>
        <Link to="/products">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
