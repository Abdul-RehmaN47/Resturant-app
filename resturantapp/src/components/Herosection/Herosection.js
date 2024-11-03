import React from 'react';
import './Herosection.css'; 

function Herosection() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Welcome to Our Restaurant</h1>
        <p>Experience the taste of fine dining with our exquisite menu.</p>
        <a href="/menu" className="btn btn-primary">View Menu</a>
      </div>
    </div>
  );
}

export default Herosection;
