import axios from "axios";

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';


class PokemonService {
    getPokemonPage = (pageNumber, pokemonPerPage) => {
        let limit = pokemonPerPage;
        let offset = pokemonPerPage * (pageNumber - 1);
        let count;
        return axios.get('/pokemon', {params: {offset, limit}})
            .then(response => {
                count = response.data.count;
                let pokemons = response.data.results;
                let pokemonByNamePromises = pokemons.map(pokemon => this.getPokemonByName(pokemon.name));
                return Promise.all(pokemonByNamePromises);
            })
            .then(pokemonsByName => {
                return {
                    total: count,
                    data: pokemonsByName.map(pokemonByName => pokemonByName.data)
                };
            });
    }

    getPokemonByName = (name) => {
        return axios.get(`/pokemon/${name}`)
    }
}

export const pokemonService = new PokemonService();