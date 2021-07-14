import axios from "axios";
import {actionTypes} from "./actionTypes";

const initialState = [];

export default function pokemonReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_POKEMON: {
            return action.payload
        }
        case actionTypes.FILTER_POKEMON: {
            return action.payload
        }
        default:
            return state;
    }
}

export async function fetchPokemon(dispatch) {
    const pokemonList = await axios.get('', {
    })

    const pokemonObjects = pokemonList.map(({id,
        name,
        weight,
        height,types,sprite}) => ({id,
        name,
        weight,
        height, types, sprite}));

    dispatch({type: actionTypes.GET_ALL_POKEMON, payload: pokemonObjects})
}

export const fetchPokemonByFilter = (searchText, selectedTypes) => {
    return (dispatch) => {
        dispatch(fetchPokemonByQueriesRequest);
        axios.get(`/search?name=${searchText}&types=${selectedTypes}`).then((res) => {
            dispatch(fetchPokemonByQueriesResolved(res));
        });
    };
};

const fetchPokemonByQueriesResolved = (pokemonData) => {
    return {
        type: actionTypes.FILTER_POKEMON,
        payload: pokemonData,
    };
};

const fetchPokemonByQueriesRequest = () => {
    return {
        type: actionTypes.MAKE_API_REQUEST,
    };
};