import { actionTypes } from "./actionTypes";

const initialState = {
  signIn: true,
  signUp: false,
  email: "",
  password: "",
  token: "",
  data: [],
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_LOGIN_FORM: {
      return {
        ...state,
        signIn: !state.signIn,
        signUp: !state.signUp,
      };
    }
    default:
      return state;
  }
}
