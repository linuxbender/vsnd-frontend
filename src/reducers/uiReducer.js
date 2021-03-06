import {HIDE_UI_LOADER, INIT_DEFAULT_UI_STATE, SET_LANGUAGE_CODE, SHOW_UI_LOADER} from '../actions/uiAction';
import {T_Store} from '../utils/appTypes';

const uiReducer = (state = T_Store.ui, action) => {
    switch (action.type) {
        case INIT_DEFAULT_UI_STATE:
            return {...state, ...action.data};
        case SET_LANGUAGE_CODE:
            return {...state, languageCode: action.data};
        case SHOW_UI_LOADER:
        case HIDE_UI_LOADER:
            return {...state, isLoading: action.data};
        default:
            return state;
    }
};

export default uiReducer;