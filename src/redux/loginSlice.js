import { actionTypes } from "./actionTypes";

const initialState = {
  signIn: true,
  isAuthenticated: !!localStorage.getItem('token'),
  isAlertWindowOpen: false
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_LOGIN_FORM: {
      return {
        ...state,
        signIn: !state.signIn,
      };
    }

    case actionTypes.LOG_OUT: {
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated,
      }
    }

    case actionTypes.UNAUTHORIZED_ERROR: {
      return {
        ...state,
        isAlertWindowOpen: !state.isAlertWindowOpen,
      }
    }

    default:
      return state;
  }
}

export async function showAlertMessage(dispatch) {
  dispatch({type: actionTypes.UNAUTHORIZED_ERROR})
}
