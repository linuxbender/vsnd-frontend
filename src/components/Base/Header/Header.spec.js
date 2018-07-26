import {shallow} from 'enzyme/build/index';
import React from 'react';
import Header from './Header';

describe('Header', () => {

    let mountedHeader = undefined;

    beforeEach(() => {
        mountedHeader = shallow(<Header/>)
    });

    test('renders without crashing', () => {
        shallow(<Header/>);
    });

    test('renders a Header', () => {
        const header = mountedHeader.find('header');
        expect(header.length).toBe(1);
    });

    test('header has a img with alt text "logo"', () => {
        const header = mountedHeader.find('img [alt="logo"]');
        expect(header.length).toBe(1);
    });

    test('display an image in the header', () => {
        const header = mountedHeader.find('img [src="logo.svg"]');
        expect(header.length).toBe(1);
    });

    test('display h1 with the class name app-intro', () => {
        const header = mountedHeader.find('h1 [className="App-title"]');
        expect(header.length).toBe(1);
    });

    test('display h1 with the text "Welcome to React"', () => {
        const displayText = 'Welcome to React';
        const header = mountedHeader.find('h1');
        expect(header.text()).toBe(displayText);
    });

});