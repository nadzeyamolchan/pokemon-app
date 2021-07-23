import axios from "axios";
import {actionTypes} from "./actionTypes";

const initialState = [];

export default function pokemonTypesReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_POKEMON_TYPES: {
            return action.payload;
        }
        default:
            return state;
    }
}

export async function fetchPokemonTypes(dispatch) {
    const response = await axios.get('/pokemon/type');
    const pokemonTypes = response.map(type => type.name);

    dispatch({type: actionTypes.GET_POKEMON_TYPES, payload: pokemonTypes})
}