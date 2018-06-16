import {loggerMiddleware} from './loggerMiddleware';

describe('Logger Middleware', () => {

    let create = undefined;

    beforeEach(() => {
        create = () => {
            const store = {
                getState: jest.fn(() => ({})),
                dispatch: jest.fn(),
            };
            const next = jest.fn();
            const invoke = (action) => loggerMiddleware[0](store)(next)(action);
            return {store, next, invoke}
        }
    });

    it('appLogger is not undefined', () => {
        const appLogger = loggerMiddleware[0];
        expect(appLogger).not.toBeUndefined();
    });

    it('loggerMiddleware', () => {
        const {next, invoke} = create();
        const action = {type: 'TEST'};
        invoke(action);
        expect(next).toHaveBeenCalledWith(action)
    });
});