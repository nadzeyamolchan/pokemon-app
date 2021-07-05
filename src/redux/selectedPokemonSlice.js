import {actionTypes} from "./actionTypes";

const initialState = {
    selectedPokemon: {},
    showPokemonModalWindow: false
}

export default function selectedPokemonReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.selectPokemon: {
            return {
                ...state,
                selectedPokemon: action.payload,
                showPokemonModalWindow: !state.showPokemonModalWindow
            }
        }
        case actionTypes.toggleModalWindow: {
            return {
                ...state,
                showPokemonModalWindow: !state.showPokemonModalWindow
            }
        }
        default:
            return state;
    }
}