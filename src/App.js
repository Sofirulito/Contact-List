import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import './App.css';
import ContactList from './Components/Card/CardList';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/favorites">
          </Route>
          <Route path="/contacts">
          </Route>
          <Route path="/">
            <ContactList/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
