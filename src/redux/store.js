import {configureStore} from "@reduxjs/toolkit";

import pokemonReducer from './pokemonSlice';
import loginReducer from "./loginSlice";

export default configureStore({
    reducer: {
        pokemon: pokemonReducer,
        login: loginReducer,
    }
});