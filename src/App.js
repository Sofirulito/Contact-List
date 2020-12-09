import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from './store'
import styled from 'styled-components'
import Header from './Components/Header/Header';
import Favorites from './Pages/Favorites';
import Overview from './Pages/Overview';
import Contacts from './Pages/Contacts';

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
              <Route path="/favorites" component={Favorites} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/" component={Overview} />
            </Switch>
          </Container>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
