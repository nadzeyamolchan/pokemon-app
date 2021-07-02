import axios from "axios";
import {actionTypes} from "./actionTypes";

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
    const response = await axios.get('/type');
    const pokemonTypes = response.results.map(type => type.name);

    dispatch({type: actionTypes.getPokemonTypes, payload: pokemonTypes})
}