import reducers from './index';

describe('Root Reducers', () => {
    it('Root Reducer is not undefind', () => {
        const rootReducer = reducers;
        expect(rootReducer).not.toBeUndefined();
    });
});
