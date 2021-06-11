import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import PokemonApp from './PokemonApp';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
    <PokemonApp />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

