import {configureStore} from "@reduxjs/toolkit";

import pokemonReducer from './pokemonSlice';
import pokemonTypesReducer from "./pokemonTypesSlice";
import selectedPokemonReducer from "./selectedPokemonSlice";

export default configureStore({
    reducer: {
        pokemon: pokemonReducer,
        pokemonTypes: pokemonTypesReducer,
        selectedPokemon: selectedPokemonReducer
    }
});