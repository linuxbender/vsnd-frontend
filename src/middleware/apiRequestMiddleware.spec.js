import {apiRequest} from '../actions/apiRequestAction';
import {showUiLoader} from '../actions/uiAction';
import {HTTP_GET} from '../utils/apiHelper';
import {apiRequestMiddleware} from './apiRequestMiddleware';

describe('apiRequest Middleware', () => {

    let create = undefined;

    beforeEach(() => {
        create = () => {
            const store = {
                getState: jest.fn(() => ({})),
                dispatch: jest.fn(),
            };
            const fetch = window.fetch = jest.fn();
            const next = jest.fn();
            const invoke = (action) => apiRequestMiddleware[0](store)(next)(action);
            return {store, next, invoke, fetch}
        }
    });

    it('apiRequest is not undefined', () => {
        const apiRequest = apiRequestMiddleware[0];
        expect(apiRequest).not.toBeUndefined();
    });

    it('apiRequestMiddleware', () => {
        const {next, invoke} = create();
        const action = {type: 'TEST'};
        invoke(action);
        expect(next).toHaveBeenCalledWith(action)
    });

    it('apiRequest is called for the action SHOW_UI_LOADER', () => {
        const {store, invoke} = create();
        const action = apiRequest(HTTP_GET, 'localhost', {data: 42}, {type: 'onSUCCESS'}, {type: 'onERROR'});
        invoke(action);

        expect(store.dispatch).toHaveBeenCalledWith(showUiLoader());
    });

    it('fetch is called for the action apiRequest', () => {
        const {invoke, fetch} = create();
        const action = apiRequest(HTTP_GET, 'localhost', {data: 42}, {type: 'onSUCCESS'}, {type: 'onERROR'});
        invoke(action);
        expect(fetch).toHaveBeenCalledWith('localhost', {method: HTTP_GET});
    });
});