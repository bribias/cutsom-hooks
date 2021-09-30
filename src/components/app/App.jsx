import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ListOfCharacters from '../characters/ListOfCharacters';
import Character from '../characters/Character';

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
          <Character />
        </Route>
        <Route path="/">
          <ListOfCharacters />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
