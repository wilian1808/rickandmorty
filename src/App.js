import React from 'react';
import './App.css';

import { Route, Redirect } from 'wouter'
import Character from 'pages/Character'
import Location from 'pages/Location'
import Episode from 'pages/Episode'
import ErrorPage from 'pages/404'
import Home from 'pages/Home'

function App() {
  return (
    <main>
      
      <Route path="/" component={Home} />
      <Route path="/characters/:number" component={Character} />
      <Route path="/characters">
        {
          <Redirect to="/characters/1" />
        }
      </Route>
      <Route path="/locations" component={Location} />
      <Route path="/episodes" component={Episode} />
      <Route path="/:" component={ErrorPage} />

    </main>
  );
}

export default App;
