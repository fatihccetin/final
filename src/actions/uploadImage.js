import axios from 'axios';
import {
    UPLOAD_IMAGE
} from "./types";

import {alert} from '../utils/alert'

export const uploadImage = (image, token) => (dispatch) => {

    axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
    axios.post("https://bootcampapi.techcs.io/api/fe/v1/file/upload/image", image)
        .then(data => {
            dispatch({
                type: UPLOAD_IMAGE,
                payload: data
            });
            alert.success("Fotoğraf başarıyla yüklendi.")
        }).catch(err => {
           console.log(err);
           alert.error("Fotoğraf yükleme işlemi başarısız.")
        });
};
