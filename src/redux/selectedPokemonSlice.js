import {actionTypes} from "./actionTypes";
import axios from "axios";

const initialState = {
    selectedPokemon: {},
    showPokemonModalWindow: false
}

export default function selectedPokemonReducer(state = initialState, action) {
    switch (action.type) {
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