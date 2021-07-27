import { actionTypes } from "./actionTypes";

const initialState = {
  isAuthenticated: !!localStorage.getItem("token"),
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOG_OUT: {
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated,
      };
    }

    default:
      return state;
  }
}
