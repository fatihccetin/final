import axios from 'axios';
import {
    GET_BRANDS
    
} from "./types";

export const getBrands = () => (dispatch) => {
    axios.get("https://bootcampapi.techcs.io/api/fe/v1/detail/brand/all")
        .then(data => {
            dispatch({
                type: GET_BRANDS,
                payload: data
            });
        }).catch(err => {
           console.log(err);
        });
};





