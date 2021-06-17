import axios from "axios";

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';


class PokemonService {
    getPokemonPage = (pageNumber, pokemonPerPage) => {
        let limit = pokemonPerPage;
        let offset = pokemonPerPage * pageNumber;
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

    getPokemonById = (id) => {
        return axios.get(`/pokemon/${id}`)
    }

    getTypeByUrl = (url) => {
        return axios.get(url);
    }

    getAllPokemon = () => {
        return axios.get('/pokemon', {params: {offset: 0, limit: 1}})
            .then(res => this.getPokemonPage(0, res.data.count))
    }

    getPokemonTypes = () => {
        return axios.get('/type')
            .then(response => {
                let types = response.data.results;
                let pokemonByTypePromises = types.map(type => this.getTypeByUrl(type.url));
                return Promise.all(pokemonByTypePromises);
            })
            .then(pokemonsByType => {
                return {
                    data: pokemonsByType.map(pokemonByType => pokemonByType.data.name)
                };
            });

    }
}

export const pokemonService = new PokemonService();