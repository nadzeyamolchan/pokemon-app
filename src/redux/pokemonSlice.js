import axios from "axios";

import {POKEMON_API_URL} from "../constants";

const initialState = {
    pokemon: []
}

export default function pokemonReducer(state = initialState, action) {
    switch (action.type) {
        case 'getAllPokemon': {
            return action.payload
        }
        default:
            return state;
    }
}

export async function fetchPokemon(dispatch) {
    const getPokemonUrl = `${POKEMON_API_URL}/pokemon`;
    const pokemonCount = await axios.get(getPokemonUrl, {
        params: {
            offset: 0,
            limit: 1
        }
    });

    const pokemonList = await axios.get(getPokemonUrl, {
        params: {
            offset: 0,
            limit: pokemonCount.count
        }
    })

    const pokemonData = await Promise.all(pokemonList.results.map(pokemon => axios.get(getPokemonUrl + '/' + pokemon.name)));

    const pokemonObjects = pokemonData.map((
        {
            id,
            name,
            weight,
            height,
            types,
            sprites: {other: {dream_world: {front_default: sprite}}},
        }) => ({id, name, weight, height, types, sprite}))

    dispatch({type: 'getAllPokemon', payload: pokemonObjects})
}