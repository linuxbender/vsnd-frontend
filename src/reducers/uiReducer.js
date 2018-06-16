import {HIDE_UI_LOADER, SHOW_UI_LOADER} from '../actions/uiAction';
import {T_Store} from '../utils/appTypes';

const uiReducer = (state = T_Store.ui, action) => {
    switch (action.type) {
        case SHOW_UI_LOADER:
        case HIDE_UI_LOADER:
            return {...state, isLoading: action.data};
        default:
            return state;
    }
};

export default uiReducer;