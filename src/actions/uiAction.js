export const SHOW_UI_LOADER = 'SHOW_UI_LOADER';
export const HIDE_UI_LOADER = 'HIDE_UI_LOADER';
export const SET_LANGUAGE_CODE = 'SET_LANGUAGE_CODE';

export const showUiLoader = () => ({type: SHOW_UI_LOADER, data: true});
export const hideUiLoader = () => ({type: HIDE_UI_LOADER, data: false});
export const setLanguageCode = data => ({type: SET_LANGUAGE_CODE, data: data});