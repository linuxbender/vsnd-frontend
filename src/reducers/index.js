import {combineReducers} from 'redux';
import {T_RootReducer} from '../utils/appTypes';
import partnerInfoReducer from './partnerInfoReducer';
import systemInfoReducer from './systemInfoReducer';
import uiReducer from './uiReducer';

const reducers = combineReducers({
    ...T_RootReducer,
    ui: uiReducer,
    systemInfo: systemInfoReducer,
    partnerInfo: partnerInfoReducer
});

export default reducers;