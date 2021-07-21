import {actionTypes} from "./actionTypes";


const initialState = {
    isDownloadWindowOpen: false
};

export default function downloadModalWindowReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.TOGGLE_DOWNLOAD_POKEMON_MODAL_WINDOW: {
            return {
                ...state,
                isDownloadWindowOpen: !state.isDownloadWindowOpen
            }
        }
        default:
            return state;
    }
}