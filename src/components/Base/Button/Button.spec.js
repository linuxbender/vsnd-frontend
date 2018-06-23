import {shallow} from 'enzyme/build/index';
import React from 'react';
import Button from './Button';

describe('Button', () => {

    let mountedButton = undefined;

    beforeEach(() => {
        mountedButton = shallow(<Button/>)
    });

    it('renders without crashing', () => {
        shallow(<Button/>);
    });

    it('renders a button', () => {
        const button = mountedButton.find('button');
        expect(button.length).toBe(1);
    });

    it('renders without crashing', () => {
        const resultText = 'Hello World';
        const wrapper = shallow(<Button text={resultText}/>);
        expect(wrapper.find('button').text()).toBe(resultText);
    });
});