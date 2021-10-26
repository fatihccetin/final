import axios from 'axios';
import {
    GET_CATEGORIES
    
} from "./types";

export const getCategories = () => (dispatch) => {
    axios.get("https://bootcampapi.techcs.io/api/fe/v1/detail/category/all")
        .then(data => {
            dispatch({
                type: GET_CATEGORIES,
                payload: data
            });
        }).catch(err => {
           console.log(err);
        });
};