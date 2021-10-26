import {
    GET_COLORS
  } from "../actions/types";
  
  const INITIAL_STATE = {
    colors: [],
    
  };
  
  const colorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
  
        case GET_COLORS:
        return {
          ...state,
          colors: action.payload.data,
        };
  
      default:
        return state;
    }
  };
  
  export default colorReducer;