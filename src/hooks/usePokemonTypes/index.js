import {useState, useEffect, useCallback} from 'react';
import axios from "axios";

export default function usePokemonTypes(pokemonApiUrl) {
    const [types, setTypes] = useState([]);

    const getAllPokemonTypes = useCallback( async () => {
        const typesList =  await axios.get(`${pokemonApiUrl}/type`);
        const typeName = typesList.results.map(type => type.name);
        setTypes(typeName);
    }, [pokemonApiUrl])

    useEffect(() => {
        if (!types.length) {
            getAllPokemonTypes();
        }
    }, [getAllPokemonTypes, types]);

    return types;
}