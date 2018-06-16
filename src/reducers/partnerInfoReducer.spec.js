import {loadPartnerInfo} from '../actions/partnerInfoAction';
import {T_PartnerInfo} from '../utils/appTypes';
import partnerInfoReducer from './partnerInfoReducer';

describe('PartnerInfo Reducer', () => {
    it('PartnerInfo reducer is defined', () => {
        const partnerInfo = partnerInfoReducer;
        expect(partnerInfo).not.toBeUndefined();
    });

    it('PartnerInfo reducer return a state', () => {
        const partnerInfoState = partnerInfoReducer(undefined, {type: 'DEMO'});
        expect(partnerInfoState).not.toBeUndefined();
    });

    it('should return the initial state', () => {
        const partnerInfoState = partnerInfoReducer(undefined, {type: 'DEMO'});
        expect(partnerInfoState).toBe(T_PartnerInfo);
    });

    it('should Handle LOAD_PARTNER_INFO', () => {
        let newPartnerInfo = T_PartnerInfo;
        newPartnerInfo.id = '42';
        newPartnerInfo.firstName = 'John';
        newPartnerInfo.name = 'Doe';
        const partnerInfoState = partnerInfoReducer(undefined, loadPartnerInfo(newPartnerInfo));

        expect(partnerInfoState.id).toBe(newPartnerInfo.id);
        expect(partnerInfoState.firstName).toBe(newPartnerInfo.firstName);
        expect(partnerInfoState.name).toBe(newPartnerInfo.name);
    });
});