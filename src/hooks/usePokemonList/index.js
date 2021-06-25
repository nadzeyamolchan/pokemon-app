import {useState, useEffect, useCallback} from 'react';
import axios from "axios";

export default function usePokemonList(pokemonApiUrl) {
    const [pokemon, setPokemon] = useState([]);
    const getPokemonUrl = pokemonApiUrl + '/pokemon';

    const getAllPokemon = useCallback(async () => {
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
        });
        const pokemonData = await Promise.all(pokemonList.results.map(pokemon => axios.get(getPokemonUrl + '/' + pokemon.name)));
        setPokemon(pokemonData);
    }, [getPokemonUrl]);


    useEffect(() => {
        if (pokemon && pokemon.length === 0) {
            getAllPokemon();
        }
    }, [getAllPokemon, pokemon]);

    return pokemon;
}