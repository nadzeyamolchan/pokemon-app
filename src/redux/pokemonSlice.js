import axios from "axios";
import {actionTypes} from "./actionTypes";

const initialState = {
    pokemon: []
}

export default function pokemonReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_POKEMON: {
            return action.payload
        }
        default:
            return state;
    }
}

export async function fetchPokemon(dispatch) {
    /*const pokemonCount = await axios.get('/pokemon', {
        params: {
            offset: 0,
            limit: 1
        }
    });*/

    const pokemonList = await axios.get('/pokemon', {
        /*params: {
            offset: 0,
            limit: pokemonCount.count
        }*/
    })

    /*const pokemonData = await Promise.all(pokemonList.results.map(pokemon => axios.get('/pokemon/' + pokemon.name)));*/

    /*const pokemonObjects = pokemonData.map((
        {
            id,
            name,
            weight,
            height,
            types,
            sprites: {other: {dream_world: {front_default: sprite}}},
        }) => ({id, name, weight, height, types, sprite}))*/

    const pokemonObjects = pokemonList.map(({id,
        name,
        weight,
        height,types,sprite}) => ({id,
        name,
        weight,
        height, types, sprite}));

    dispatch({type: actionTypes.GET_ALL_POKEMON, payload: pokemonObjects})
}