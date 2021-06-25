import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import PokemonApp from './PokemonApp';

import axios from "axios";

axios.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
    <PokemonApp />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

