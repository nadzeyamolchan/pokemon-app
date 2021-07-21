import axios from "axios";
import {actionTypes} from "./actionTypes";

const initialState = {
  pokemon: [],
  total: 0,

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
        `/search`,
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