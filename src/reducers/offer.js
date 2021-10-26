import {
    GET_GIVE_OFFER,
    GET_RECEIVED_OFFER,
    REJECT_OFFER,
    ACCEPT_OFFER,
    CANCEL_OFFER
  } from "../actions/types";
  
  const INITIAL_STATE = {
    givenOffers:[],
    receivedOffers:[],
    rejectOffer:{},
    acceptOffer:{},
    cancelOffer:{}
  };
  
  const offerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
  
  
        case GET_GIVE_OFFER:
        return {
          ...state,
          givenOffers: action.payload.data,
        };
        
        case GET_RECEIVED_OFFER:
          return {
            ...state,
            receivedOffers: action.payload.data,
          };

          case REJECT_OFFER:
          return {
            ...state,
            rejectOffer: action.payload.data,
          };

          case ACCEPT_OFFER:
          return {
            ...state,
            acceptOffer: action.payload.data,
          };

          case CANCEL_OFFER:
          return {
            ...state,
            cancelOffer: action.payload.data,
          };
  
      default:
        return state;
    }
  };
  
  export default offerReducer;