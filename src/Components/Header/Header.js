import React, { useState } from 'react';
import { Link }  from "react-router-dom";
import logo from '../../images/logo.svg';
import Form from '../Form/Form';
import "./header.css";

function Header(){
    const [showForm, setShowForm] = useState(false)
    const toggleTrueFalse = () => setShowForm(!showForm);

    return(
      <>
      <header className="Header">
        <nav className="Header-nav">
          <div className="Header-brand">
            <img src={logo} alt="logo" />
          </div>
          <ul className="Header-links">
            <li><Link to="/overview">Overview</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
            <li><button onClick={toggleTrueFalse}><span>&#43;</span> New</button></li>
          </ul>
        </nav>
      </header>
      { showForm ? <Form /> : null }
      </>
    )
}

export default Header;