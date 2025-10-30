import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../assets/logo.png' 

function Header() {
  return (
    <header className="header">
      <div className="header_logo">
        <Link to="/"><img src={logo} alt="Logo" /></Link>
      </div>

      <nav className="header_nav">
        <Link to="/">Home</Link>
        <Link to="/programme">Programme</Link>
        <Link to="/location">Location</Link>
        <Link to="/conductor">Conductor</Link>
        <Link to="/repertoire">Repertoire</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/links">Links</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Header
