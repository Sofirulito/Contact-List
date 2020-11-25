import React from 'react';
import { Link }  from "react-router-dom";
import logo from '../../images/logo.svg';
import "./header.css";

function Header(){
    return(
      <header className="Header">
        <nav className="Header-nav">
          <a href="/" className="Header-brand">
            <img src={logo} alt="logo" />
          </a>
          <ul className="Header-links">
            <li><Link to="/">Overview</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
            <li><button>New</button></li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;