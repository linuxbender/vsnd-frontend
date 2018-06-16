import {HTTP_GET} from './apiHelper';

describe('apiHelper', () => {
    it('HTTP_GET is not undefined and the value is "GET"', () => {
        expect(HTTP_GET).not.toBeUndefined();
        expect(typeof HTTP_GET).toBe('string');
        expect(HTTP_GET).toBe('GET');
    });
});