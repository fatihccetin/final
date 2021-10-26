import {
    GET_CATEGORIES
  } from "../actions/types";
  
  const INITIAL_STATE = {
    categories: [],
    
  };
  
  const categoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
  
        case GET_CATEGORIES:
        return {
          ...state,
          categories: action.payload.data,
        };
  
      default:
        return state;
    }
  };
  
  export default categoryReducer;