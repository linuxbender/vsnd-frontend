import {
    HIDE_UI_LOADER,
    hideUiLoader,
    SET_LANGUAGE_CODE,
    setLanguageCode,
    SHOW_UI_LOADER,
    showUiLoader
} from './uiAction';

describe('uiAction', () => {
    it('should create an action to show ui loader with the data parameter set to true', () => {
        const expectedAction = {
            type: SHOW_UI_LOADER,
            data: true
        };
        expect(showUiLoader()).toEqual(expectedAction);
        expect(showUiLoader().data).toBe(true);
    });
    it('should create an action to show ui loader with the data parameter set to true', () => {
        const expectedAction = {
            type: HIDE_UI_LOADER,
            data: false
        };
        expect(hideUiLoader()).toEqual(expectedAction);
        expect(hideUiLoader().data).toBe(false);
    });
    it('should create an action to set the language with the data parameter set to De', () => {
        const expectedAction = {
            type: SET_LANGUAGE_CODE,
            data: 'De'
        };
        expect(setLanguageCode('De')).toEqual(expectedAction);
        expect(setLanguageCode('De').data).toBe(expectedAction.data);
    });
});