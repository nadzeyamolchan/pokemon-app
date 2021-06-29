import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import axios from "axios";

import PokemonApp from './PokemonApp';
import store from "./redux/store";
import {fetchPokemon} from "./redux/pokemonSlice";

axios.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

store.dispatch(fetchPokemon);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
    <PokemonApp />
      </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);