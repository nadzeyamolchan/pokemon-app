const initialState = {
    selectedPokemon: {},
    showPokemonModalWindow: false
}

export default function selectedPokemonReducer(state = initialState, action) {
    switch (action.type) {
        case 'selectPokemon': {
            return {
                ...state,
                selectedPokemon: action.payload,
                showPokemonModalWindow: !state.showPokemonModalWindow
            }
        }
        case 'closeModalWindow': {
            return {
                ...state,
                showPokemonModalWindow: !state.showPokemonModalWindow
            }
        }
        default:
            return state;
    }
}
