// /src/components/NavBar/NavBar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Include your navbar styles

const NavBar = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
