import ContentNotFoundError from '../utils/CustomErrors/ContentNotFoundError'
import ContentUnexpectedError from '../utils/CustomErrors/ContentUnexpectedError'

const checkStatus = response => {

    if (!response.ok) {
        if(response.status === 404){
            return Promise.reject(new ContentNotFoundError());
        }else{
            return Promise.reject(new ContentUnexpectedError());

        }
    }

    return response;
};

const parseJSON = response => response.json();

const fetcher = {

    get: (url) =>
        fetch(url)
            .then(checkStatus)
            .then(parseJSON)
            .catch(error => {
                return Promise.reject(error);
            }),

};

const getContentByURL = (url) => fetcher.get(url);

const API = {
    getContentByURL
}

export default API;