import axios from 'axios';
import { alert } from '../utils/alert';
import {
    GET_PRODUCT,
    SELECT_CATEGORY,
    GET_PRODUCT_DETAIL,
    PURCHASE_PRODUCT,
    CREATE_PRODUCT,
    OFFER_PRODUCT
    
} from "./types";


export const getProduct = () => (dispatch) => {
    axios.get("https://bootcampapi.techcs.io/api/fe/v1/product/all")
        .then(data => {
            dispatch({
                type: GET_PRODUCT,
                payload: data
            });
        }).catch(err => {
           console.log(err);
        });
};

export const selectCategory = (product) => (dispatch) => {
    dispatch({ type: SELECT_CATEGORY, payload: product });
};


export const getProductDetail = (id, token) => (dispatch) => {
    axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
    axios.get("https://bootcampapi.techcs.io/api/fe/v1/product/"+id)
        .then(data => {
            dispatch({
                type: GET_PRODUCT_DETAIL,
                payload: data
            });


        }).catch(err => {
           console.log(err);
        });
};

export const purchaseProduct = (id, token) => (dispatch) => {

    axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
    axios.put("https://bootcampapi.techcs.io/api/fe/v1/product/purchase/"+id)
        .then(data => {
            dispatch({
                type: PURCHASE_PRODUCT,
                payload: data
            });
            alert.success("Ürün başarıyla satın alındı.")
        }).catch(err => {
           console.log(err);
           alert.error("Ürün satın alınamadı.")
        });
};

export const addProduct = (product, token) => (dispatch) => {

    axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
    axios.post("https://bootcampapi.techcs.io/api/fe/v1/product/create",product)
        .then(data => {
            dispatch({
                type: CREATE_PRODUCT,
                payload: data
            });
            alert.success("Ürün başarıyla eklendi.")
        }).catch(err => {
           console.log(err);
           alert.error("Ürün eklenemedi.")
        })
};

export const offerProduct = (product, id, token) => (dispatch) => {

    axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
    axios.post("https://bootcampapi.techcs.io/api/fe/v1/product/offer/" + id, product)
        .then(data => {
            dispatch({
                type: OFFER_PRODUCT,
                payload: data
            });
            alert.success("Ürüne başarıyla teklif verildi.")
        }).catch(err => {
           console.log(err);
           alert.error("Ürüne teklif verilemedi.")
        });
};





