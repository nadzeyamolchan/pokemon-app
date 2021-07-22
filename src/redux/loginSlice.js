import { actionTypes } from "./actionTypes";
import axios from "axios";

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
    case actionTypes.LOGIN_SIGN_UP: {
            return {
                ...state,
            }
        }
    default:
      return state;
  }
}

export const sendCredentialsToDataBase = (data) => {
  return (dispatch) => {
    axios
      .post(`/users`, {
        data: {
          username: data.username,
          password: data.password,
          retypepassword: data.confirmPassword,
          email: data.email,
        }
      })
      .then((res) => {
        console.log(res);
        dispatch(sendCredentialsToGetDataResolved({ token: res.token }));
      });
  };
};

const sendCredentialsToGetDataResolved = (token) => {
  return {
    type: actionTypes.LOGIN_SIGN_UP,
    payload: token,
  };
};
