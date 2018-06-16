import {T_PartnerInfo} from '../utils/appTypes';
import {LOAD_PARTNER_INFO, loadPartnerInfo} from './partnerInfoAction';

describe('PartnerInfo Actions', () => {
    it('should create an action to load partnerInfo', () => {
        const data = T_PartnerInfo;
        const expectedAction = {
            type: LOAD_PARTNER_INFO,
            data
        };
        expect(loadPartnerInfo(data)).toEqual(expectedAction)
    });
});