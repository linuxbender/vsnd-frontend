import React from 'react';
import {shallow} from 'enzyme/build/index';
import Search from './Search';

describe('Search', () => {

    let mountedSearch = undefined;

    beforeEach(() => {
        mountedSearch = shallow(<Search />)
    });

    it('renders without crashing', () => {
        shallow(<Search />);
    });

    it('renders a input, label, and button element', () => {
        const input = mountedSearch.find('input');
        const label = mountedSearch.find('label');
        const button = mountedSearch.find('Button');

        expect(input.length).toBe(1);
        expect(label.length).toBe(1);
        expect(button.length).toBe(1);
    });

    it('input element has a attribute name and with the value of searchVSND', () => {
        const input = mountedSearch.find('input [name="searchVSND"]');
        expect(input.length).toBe(1);
    });

    it('input element has a attribute onChange with onChangeHandler', () => {
        const input = mountedSearch.find('input [onChange="onChangeHandler"]');
        expect(input.length).toBe(1);
    });
});