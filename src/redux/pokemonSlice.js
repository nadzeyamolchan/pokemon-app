import axios from "axios";
import {actionTypes} from "./actionTypes";

const initialState = {
  pokemon: [],
  total: 0,
  pokemonTypes: [],
  selectedPokemon: {},
  showPokemonModalWindow: false
};

export default function pokemonReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_POKEMON: {
          return {
            ...state,
            pokemon: action.payload.pokemon,
            total: action.payload.total
          }
        }
        case actionTypes.GET_POKEMON_TYPES: {
          return {
            ...state,
            pokemonTypes: action.payload
          }
        }
        case actionTypes.SELECT_POKEMON: {
          return {
            ...state,
            selectedPokemon: action.payload,
            showPokemonModalWindow: !state.showPokemonModalWindow
        }
        }
        case actionTypes.TOGGLE_POKEMON_MODAL_WINDOW: {
          return {
            ...state,
            showPokemonModalWindow: !state.showPokemonModalWindow
        }
        }
        default:
          return state;
    }
}

export const fetchPokemon = (searchText, selectedTypes, limit, currentPage) => {
  return (dispatch) => {
    dispatch(fetchPokemonByQueriesRequest);
    let offset = limit * currentPage;
    axios
      .get(
        `/pokemon/search`,
          {
              params: {
                  name: searchText,
                  types: selectedTypes.join('&types='),
                  limit: limit,
                  offset: offset
              },
              paramsSerializer: params => {
                  let result = '';
                  for (const [key, value] of Object.entries(params)) {
                      result = result && (value ? result + '&' : result + '')
                      if(Array.isArray(value)) {
                          result += value ? `${key}=${value.join(`&${key}=`)}` : '';
                      } else {
                          result += value ? `${key}=${value}` : ''
                      }
                  }
                  return result;
              }
          }
      )
      .then((res) => {
        dispatch(
          fetchPokemonByQueriesResolved({ pokemon: res.data, total: res.total })
        );
      });
  };
};

const fetchPokemonByQueriesResolved = (pokemonData) => {
    return {
        type: actionTypes.FETCH_POKEMON,
        payload: pokemonData,
    };
};

const fetchPokemonByQueriesRequest = () => {
    return {
        type: actionTypes.MAKE_API_REQUEST,
    };
};

export async function fetchPokemonTypes(dispatch) {
    const response = await axios.get('/pokemon/type');
    const pokemonTypes = response.map(type => type.name);

    dispatch({type: actionTypes.GET_POKEMON_TYPES, payload: pokemonTypes})
}

export const fetchPokemonById = (id) => {
  return (dispatch) => {
    dispatch(fetchPokemonByIdRequest);
    axios.get(`pokemon/${id}`).then((res) => {
      dispatch(fetchPokemonByIdResolved(res));
    });
  };
};

const fetchPokemonByIdResolved = (pokemon) => {
  return {
    type: actionTypes.SELECT_POKEMON,
    payload: pokemon,
  };
};

const fetchPokemonByIdRequest = () => {
  return {
    type: actionTypes.MAKE_API_REQUEST,
  };
};