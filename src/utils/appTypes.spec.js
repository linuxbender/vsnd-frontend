import {F_RootReducer, T_PartnerInfo, T_RootReducer, T_Store, T_SystemInfo, T_UserInterface} from './appTypes';

describe('App Types', () => {
    it('create a default T_Store object', () => {
        const store = T_Store;
        expect(store).not.toBeUndefined();
    });

    it('T_Store object has properties ui, systemInfo, partnerInfo', () => {
        const store = T_Store;
        expect(store.ui).not.toBeUndefined();
        expect(store.ui).toBeInstanceOf(Object);
        expect(store.systemInfo).not.toBeUndefined();
        expect(store.systemInfo).toBeInstanceOf(Object);
        expect(store.partnerInfo).not.toBeUndefined();
        expect(store.partnerInfo).toBeInstanceOf(Object);
    });

    it('create a default T_PartnerInfo object', () => {
        const partnerInfo = T_PartnerInfo;
        expect(partnerInfo).not.toBeUndefined;
    });

    it('T_PartnerInfo has propertys id, name and firstName', () => {
        const partnerInfo = T_PartnerInfo;
        expect(partnerInfo.id).not.toBeUndefined();
        expect(partnerInfo.name).not.toBeUndefined();
        expect(partnerInfo.firstName).not.toBeUndefined();
    });

    it('create a default T_SystemInfo object', () => {
        const systemInfo = T_SystemInfo;
        expect(systemInfo).not.toBeUndefined();
    });

    it('T_SystemInfo has a property backendVersion', () => {
        const systemInfo = T_SystemInfo;
        expect(systemInfo.backendVersion).not.toBeUndefined();
    });

    it('create a default T_UserInterface Object', () => {
        const ui = T_UserInterface;
        expect(ui).not.toBeUndefined();
    });

    it('T_UserInterface has a properties isLoading, languageCode', () => {
        const ui = T_UserInterface;

        expect(ui.isLoading).not.toBeUndefined();
        expect(ui.isLoading).toBe(false);
        expect(typeof ui.isLoading).toBe('boolean');

        expect(ui.languageCode).not.toBeUndefined();
        expect(typeof ui.languageCode).toBe('string');
    });

    it('create a default T_RootReducer object', () => {
        const rootReducer = T_RootReducer;
        expect(rootReducer).not.toBeUndefined();
    });

    it('T_RootReducer object has properties ui, systemInfo and partnerInfo and all are instance of func', () => {
        const rootReducer = T_RootReducer;
        expect(rootReducer.ui).not.toBeUndefined();
        expect(rootReducer.ui).toBeInstanceOf(Function);
        expect(rootReducer.systemInfo).not.toBeUndefined();
        expect(rootReducer.systemInfo).toBeInstanceOf(Function);
        expect(rootReducer.partnerInfo).not.toBeUndefined();
        expect(rootReducer.partnerInfo).toBeInstanceOf(Function);
    });

    it('create a default F_RootReducer function and is a instance of func', () => {
        const rootReducerFunc = F_RootReducer;
        expect(rootReducerFunc).not.toBeUndefined();
        expect(rootReducerFunc).toBeInstanceOf(Function);
    });
});