import {loadSystemInfo} from '../actions/systemInfoAction';
import {T_SystemInfo} from '../utils/appTypes';
import systemInfoReducer from './systemInfoReducer';

describe('SystemInfo Reducer', () => {
    it('SystemInfo reducer is defined', () => {
        const systemInfo = systemInfoReducer;
        expect(systemInfo).not.toBeUndefined();
    });

    it('SystemInfo reducer return a state', () => {
        const systemInfo = systemInfoReducer(undefined, {type: 'DEMO'});
        expect(systemInfo).not.toBeUndefined();
    });

    it('should return the initial state', () => {
        const systemInfo = systemInfoReducer(undefined, {type: 'DEMO'});
        expect(systemInfo).toBe(T_SystemInfo);
    });

    it('should Handle LOAD_SYSTEM_INFO', () => {
        let newSystemInfo = T_SystemInfo;
        newSystemInfo.backendVersion = '0.0.1';
        const systemInfoState = systemInfoReducer(undefined, loadSystemInfo(newSystemInfo));
        expect(systemInfoState.backendVersion).toBe(newSystemInfo.backendVersion);
    });
});