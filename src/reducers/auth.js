import {
    LOGIN_SUCCESS,
    REGISTER_SUCCESS
  } from "../actions/types";
  
  const INITIAL_STATE = {
    isSignIn: false,
    isSignUp: false,
    token: {},
    email:{}
  };
  
  const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
  
  
      case LOGIN_SUCCESS: {
       const email = JSON.parse(action.payload.config.data);
  
        return {
          ...state,
          isSignIn: true,
          token: action.payload.data.access_token,
          email: email.email
        };
      }
  
      case REGISTER_SUCCESS: {
        return {
          ...state,
          isSignUp: true,
          token: action.payload.data.access_token,
        };
      }
  
      default:
        return state;
    }
  };
  
  export default authReducer;