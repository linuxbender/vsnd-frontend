import {LOAD_PARTNER_INFO} from '../actions/partnerInfoAction';
import {T_Store} from '../utils/appTypes';

const partnerInfoReducer = (state = T_Store.partnerInfo, action) => {
    switch (action.type) {
        case LOAD_PARTNER_INFO:
            return action.data;
        default:
            return state;
    }
};

export default partnerInfoReducer;