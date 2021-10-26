import axios from 'axios';
import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    REGISTER_ERROR,
    REGISTER_SUCCESS
} from "./types";
import { alert } from "../utils/alert";

export const signIn = (authInfo) => (dispatch) => {
    axios.post("https://bootcampapi.techcs.io/api/fe/v1/authorization/signin", authInfo)
        .then(data => {
            localStorage.setItem('auth', JSON.stringify((data)))
            dispatch({
                type: LOGIN_SUCCESS,
                payload: data
            });
        }).catch(err => {
            dispatch({
                type: LOGIN_ERROR
            });
            alert.error("Giriş yapılamadı.")
        });
};

export const signUp = (authInfo) => (dispatch) => {
    axios.post("https://bootcampapi.techcs.io/api/fe/v1/authorization/signup", authInfo)
        .then(data => {
            localStorage.setItem('auth', JSON.stringify((data)))
            dispatch({
                type: REGISTER_SUCCESS,
                payload: data
            });
        }).catch(err => {
            dispatch({
                type: REGISTER_ERROR
            });
            alert.error("Üyelik işlemleri tamamlanamadı.")
        });
};


export const entryAuth = () => (dispatch) => {

    const auth = JSON.parse(localStorage.getItem('auth'));
    try {
        dispatch({ type: LOGIN_SUCCESS, payload: auth });
    } catch (error) {
        dispatch({
            type: LOGIN_ERROR
        });
    }
};