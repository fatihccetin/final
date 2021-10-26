import axios from 'axios';
import {
    GET_STATUS
    
} from "./types";

export const getStatus = () => (dispatch) => {
    axios.get("https://bootcampapi.techcs.io/api/fe/v1/detail/status/all")
        .then(data => {
            dispatch({
                type: GET_STATUS,
                payload: data
            });
        }).catch(err => {
           console.log(err);
        });
};
