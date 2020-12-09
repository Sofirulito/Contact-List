import React, { useState } from 'react';
import { Link }  from "react-router-dom";
import logo from '../../images/logo.svg';
import Form from '../Form/Form';
import "./header.css";

function Header(){
    const [showForm, setShowForm] = useState(false)
    const onClick = ()  => setShowForm(true)
  
    return(
      <>
      <header className="Header">
        <nav className="Header-nav">
          <a href="/overview" className="Header-brand">
            <img src={logo} alt="logo" />
          </a>
          <ul className="Header-links">
            <li><Link to="/overview">Overview</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
            <li><button onClick={onClick}>New</button></li>
          </ul>
        </nav>
      </header>
      { showForm ? <Form /> : null }
      </>
    )
}

export default Header;