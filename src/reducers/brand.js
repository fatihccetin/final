import {
    GET_BRANDS
  } from "../actions/types";
  
  const INITIAL_STATE = {
    brands: [],
    
  };
  
  const brandReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
  
        case GET_BRANDS:
        return {
          ...state,
          brands: action.payload.data,
        };
  
      default:
        return state;
    }
  };
  
  export default brandReducer;