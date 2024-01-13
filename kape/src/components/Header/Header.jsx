// /src/components/Header/Header.jsx

import React from 'react';
import NavBar from '../NavBar/NavBar';
import './header.css'; // Include your header styles

const Header = () => {
  return (
    <header>
      <div className="logo">Coffee Shop</div>
      <NavBar />
    </header>
  );
};

export default Header;
