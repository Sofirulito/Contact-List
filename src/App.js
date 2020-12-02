import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import store from './store'
import ContactList from './Components/Card/CardList';
import styled from 'styled-components'

const Container = styled.div`
  max-width: 95%;
  margin: 0 auto;
  padding: 2rem 0;
`

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Container>
            <Switch>
              <Route path="/favorites">
              </Route>
              <Route path="/contacts">
              </Route>
              <Route path="/">
                <ContactList/>
              </Route>
            </Switch>
          </Container>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
