import {API_REQUEST} from '../actions/apiRequestAction';
import {hideUiLoader, showUiLoader} from '../actions/uiAction';
import {HTTP_GET, HTTP_HEADER_DEFAULT, HTTP_HEADER_WITH_REQUEST_BODY, HTTP_POST, HTTP_PUT} from '../utils/apiHelper';

const onSuccessHandler = (dispatch, actionType, response) => {
    dispatch({type: actionType, data: response});
    dispatch(hideUiLoader());
};

const onErrorHandler = (dispatch, actionType, error) => {
    dispatch({type: actionType, data: error});
    dispatch(hideUiLoader());
};

const statusAndDataHandler = response => {
    if(!response.ok) {
        response.json().then(data => Promise.reject(data));
    }
    return response.json();
};

const apiRequest = ({dispatch}) => next => action => {

    if (action.type === API_REQUEST) {

        dispatch(showUiLoader());

        const {method, url, onSuccess, onError} = action.meta;

        try {
            switch (method) {
                case HTTP_GET:
                    return fetch(url, {method: method, headers: HTTP_HEADER_DEFAULT})
                        .then(statusAndDataHandler)
                        .then(response => {
                            onSuccessHandler(dispatch, onSuccess, response);
                        })
                        .catch(error => {
                            onErrorHandler(dispatch, onError, error);
                        });
                case HTTP_POST:
                case HTTP_PUT:
                    return fetch(url, {
                        method: method,
                        body: JSON.stringify(action.data),
                        headers: HTTP_HEADER_WITH_REQUEST_BODY
                    })
                        .then(statusAndDataHandler)
                        .then(response => {
                            onSuccessHandler(dispatch, onSuccess, response);
                        })
                        .catch(error => {
                            onErrorHandler(dispatch, onError, error);
                        });
                default:
                    onErrorHandler(dispatch, onError, '[Middleware] apiRequest: no HTTP method found');
            }
        } catch (err) {
            dispatch(hideUiLoader())
        }
    }
    return next(action)
};

export const apiRequestMiddleware = [apiRequest];