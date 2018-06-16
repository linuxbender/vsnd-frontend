import {HTTP_GET} from '../utils/apiHelper';
import {API_REQUEST, apiRequest} from './apiRequestAction';

describe('apiRequest Actions', () => {
    it('create apiRequestAction', () => {
        const api = apiRequest();
        expect(api).not.toBeUndefined();
    });

    it('apiRequestAction call return a type of API_REQUEST', () => {
        const api = apiRequest();
        expect(api.type).toBe(API_REQUEST);
    });

    it('apiRequestAction call with a payload param return the data property', () => {
        const payload = {id: 42};
        const api = apiRequest(null, null, payload);
        expect(api.data).toBe(payload);
    });

    it('apiRequestAction call with meta params return the meta property', () => {
        const payload = {id: 42};
        const url = 'localhost';
        const onSuccess = {};
        const onError = {};
        const method = HTTP_GET;

        const api = apiRequest(method, url, payload, onSuccess, onError);

        expect(api.meta).not.toBeUndefined();
        expect(api.meta.method).toBe(method);
        expect(api.meta.url).toBe(url);
        expect(api.meta.onSuccess).toBe(onSuccess);
        expect(api.meta.onError).toBe(onError);

    });
});