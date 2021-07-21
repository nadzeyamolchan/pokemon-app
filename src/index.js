import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import axios from "axios";

import PokemonApp from './PokemonApp';
import store from "./redux/store";
import {fetchPokemonTypes} from "./redux/pokemonTypesSlice";

axios.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

axios.defaults.baseURL = 'http://127.0.0.1:3000/pokemon'

store.dispatch(fetchPokemonTypes);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PokemonApp/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);