import React from 'react';
import { Link } from 'react-router-dom'; 
import './index.css'

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo">Your Logo</Link>
      <div className="navbar">
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/project" className="nav-link">Project</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
