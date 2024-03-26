import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <header>
      <img src="/images/logo.png" alt="Logo" className="logo" />
      <h1 className="company-name">R&R</h1>
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/ProductsPage">Products</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;