import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import axios from "axios";

import store from "./redux/store";
import {fetchPokemonTypes} from "./redux/pokemonTypesSlice";
import {PokemonApp} from "./PokemonApp";

axios.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    if(error.response.status === 401){
        //TODO redirect to login page, add pop-up with error message
        //TODO create separate file for axios settings
        console.log('401');
    }
    return Promise.reject(error);
});

axios.interceptors.request.use(function (config) {
    let token = localStorage.getItem('token');
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function (error) {

    return Promise.reject(error);
});

axios.defaults.baseURL = 'http://localhost:3001/'

store.dispatch(fetchPokemonTypes);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <PokemonApp/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);