import {
    GET_STATUS
  } from "../actions/types";
  
  const INITIAL_STATE = {
    status: [],
    
  };
  
  const statusReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
  
        case GET_STATUS:
        return {
          ...state,
          status: action.payload.data,
        };
  
      default:
        return state;
    }
  };
  
  export default statusReducer;