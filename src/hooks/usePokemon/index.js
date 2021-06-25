import {useState, useEffect, useCallback} from 'react';
import axios from "axios";

export default function usePokemon(pokemonApiUrl, id) {
    const [pokemon, setPokemon] = useState(null);

    const getPokemon = useCallback(async () => {
        const pokemonById = await axios.get(`${pokemonApiUrl}/pokemon/${id}`);
        setPokemon(pokemonById);
    }, [pokemonApiUrl, id])

    useEffect(() => {
        if(!pokemon) {
            getPokemon()
        }
    }, [getPokemon, pokemon]);

    return pokemon;
}