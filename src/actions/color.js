import axios from 'axios';
import {
    GET_COLORS
    
} from "./types";

export const getColors = () => (dispatch) => {
    axios.get("https://bootcampapi.techcs.io/api/fe/v1/detail/color/all")
        .then(data => {
            dispatch({
                type: GET_COLORS,
                payload: data
            });
        }).catch(err => {
           console.log(err);
        });
};
