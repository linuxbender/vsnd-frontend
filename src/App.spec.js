import {shallow} from 'enzyme';
import React from 'react';
import App from './App';

describe('VSND App', () => {

    let mountedApp = undefined;

    beforeEach(() => {
        mountedApp = shallow(<App/>)
    });

    it('renders without crashing', () => {
        shallow(<App/>);
    });

    it('renders a Button in the app', () => {
        const mountedButton = mountedApp.find('Button');
        expect(mountedButton.length).toBe(1);
    });

    it('renders a Header in the app', () => {
        const mountedButton = mountedApp.find('Header');
        expect(mountedButton.length).toBe(1);
    });
});