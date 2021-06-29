import axios from "axios";

import {POKEMON_API_URL} from "../constants";

const initialState = {
    pokemonTypes: []
}

export default function pokemonTypesReducer(state = initialState, action) {
    switch (action.type) {
        case 'getPokemonTypes': {
            return action.payload;
        }
        default:
            return state;
    }
}

export async function fetchPokemonTypes(dispatch) {
    const getPokemonTypesUrl = `${POKEMON_API_URL}/type`;
    const response = await axios.get(getPokemonTypesUrl);
    const pokemonTypes = response.results.map(type => type.name);


    dispatch({type: 'getPokemonTypes', payload: pokemonTypes})
}