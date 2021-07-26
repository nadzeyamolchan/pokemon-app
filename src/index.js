import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import axios from "axios";

import store from "./redux/store";
import {PokemonApp} from "./PokemonApp";
import {showAlertMessage} from "./redux/loginSlice";

axios.interceptors.response.use(function (response) {
    if(response.status === 201) {
        window.location.href = '/';
        console.log('Success!');
    }
    return response.data;
}, function (error) {
    if(error.response.status === 401){
        //TODO create separate file for axios settings
        store.dispatch(showAlertMessage);
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

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <PokemonApp/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);