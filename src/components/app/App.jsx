import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';import Character from '../characters/Character';
import HeyArnoldDetailsContainer from '../../containers/HeyArnoldDetailsContainer';
import HeyArnoldContainer from '../../containers/HeyArnoldContainer';

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">
            Home
          </Link>
        </nav>
      </header>
      <Switch>
        <Route path="/:id">
          <HeyArnoldDetailsContainer />
        </Route>
        <Route path="/">
          <HeyArnoldContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
