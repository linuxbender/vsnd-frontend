import configureStore from './appStore';

describe('appStore', () => {
    it('Return a store configuration', ()=> {
        const storeConfig =  configureStore();
        expect(storeConfig).not.toBeUndefined();
    });
});