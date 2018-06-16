import {LOAD_SYSTEM_INFO, loadSystemInfo} from './systemInfoAction';

describe('systemInfo Actions', () => {
    it('should create an action to load systemInfo', () => {
        const data = 'Finish docs';
        const expectedAction = {
            type: LOAD_SYSTEM_INFO,
            data
        };
        expect(loadSystemInfo(data)).toEqual(expectedAction)
    });
});