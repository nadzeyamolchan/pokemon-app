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
    /*case actionTypes.LOGIN_SUBMIT: {
            return {
                ...state,
                data: payload.data
            }
        }*/
    default:
      return state;
  }
}

export const sendCredentialsToGetData = (email, password) => {
  return (dispatch) => {
    console.log("here!");
    axios
      .post(`/auth/login`, {
        
      })
      .then((res) => {
        console.log('And here!');
        dispatch(sendCredentialsToGetDataResolved({ data: res }));
      });
  };
};

const sendCredentialsToGetDataResolved = (data) => {
  console.log('GET request!', data);
  return {
    type: actionTypes.FETCH_POKEMON,
    payload: data,
  };
};


