import {LOAD_SYSTEM_INFO} from '../actions/systemInfoAction';
import {T_Store} from '../utils/appTypes';

const systemInfoReducer = (state = T_Store.systemInfo, action) => {
    switch (action.type) {
        case LOAD_SYSTEM_INFO:
            return action.data;
        default:
            return state;
    }
};

export default systemInfoReducer;