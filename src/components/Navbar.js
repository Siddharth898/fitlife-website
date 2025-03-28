import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <span className="logo-royal">Fit</span> <span className="logo-fitness">Life</span>
        </Link>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
          <Link to="/review" className="nav-link">Review</Link>
        </nav>
        <Link to="/join" className="btn join-btn">Sign In</Link>
      </div>
    </header>
  );
};

export default Navbar;