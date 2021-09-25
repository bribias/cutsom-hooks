import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
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
          <CharacterList />
        </Route>
        <Route path="/">
          <Character />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
