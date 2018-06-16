export const API_REQUEST = 'API_REQUEST';

export const apiRequest = (method, url, payload, onSuccess, onError) => ({
    type: API_REQUEST,
    data: payload,
    meta: {method, url, onSuccess, onError}
});