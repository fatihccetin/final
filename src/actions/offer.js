import axios from 'axios';
import { alert } from '../utils/alert';
import {
    GET_GIVE_OFFER,
    GET_RECEIVED_OFFER,
    ACCEPT_OFFER,
    REJECT_OFFER,
    CANCEL_OFFER
    
} from "./types";


export const getGivenOffers = (token) => (dispatch) => {

    axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
    axios.get("https://bootcampapi.techcs.io/api/fe/v1/account/given-offers")
        .then(data => {
            dispatch({
                type: GET_GIVE_OFFER,
                payload: data
            });
        }).catch(err => {
           console.log(err);
        });
};

export const getReceivedOffers = (token) => (dispatch) => {

    axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
    axios.get("https://bootcampapi.techcs.io/api/fe/v1/account/received-offers")
        .then(data => {
            dispatch({
                type: GET_RECEIVED_OFFER,
                payload: data
            });
        }).catch(err => {
           console.log(err);
        });
};

export const acceptOffer = (id, token) => (dispatch) => {

    axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
    axios.put("https://bootcampapi.techcs.io/api/fe/v1/account/accept-offer/"+id)
        .then(data => {
            dispatch({
                type: ACCEPT_OFFER,
                payload: data
            });
            alert.success("Teklif kabul edildi.")
        }).catch(err => {
           console.log(err);
           alert.error("Teklif kabul etme işlemi başarısız.")
        });
};

export const rejectOffer = (id, token) => (dispatch) => {

    axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
    axios.post("https://bootcampapi.techcs.io/api/fe/v1/account/reject-offer/"+id)
        .then(data => {
            dispatch({
                type: REJECT_OFFER,
                payload: data
            });
            alert.success("Teklif reddedildi.")
        }).catch(err => {
           console.log(err);
           alert.error("Teklif reddetme işlemi başarısız.")
        });
};

export const cancelOffer = (id, token) => (dispatch) => {

    axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
    axios.delete("https://bootcampapi.techcs.io/api/fe/v1/account/cancel-offer/"+id)
        .then(data => {
            dispatch({
                type: CANCEL_OFFER,
                payload: data
            });
            alert.success("Teklif geri çekildi.")
        }).catch(err => {
           console.log(err);
           alert.error("Teklif geri çekme işlemi başarısız.")
        });
};






