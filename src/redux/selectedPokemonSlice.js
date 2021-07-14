import {actionTypes} from "./actionTypes";

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