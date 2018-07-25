//https://medium.com/@dferber90/test-a-render-prop-6a44e02f4c39

import {shallow} from 'enzyme/build/index';
import React, {Fragment} from 'react';
import I18 from './I18';

describe('I18 Component', () => {

    let renderMock = jest.fn();
    let translationListMock = {'global.demo': 'Hello World'};

    test('renders without crashing', () => {
        shallow(<I18 render={renderMock} translations={translationListMock} />);
    });

    test('renders I18 calling render event', () => {
        shallow(<I18 render={renderMock} translations={translationListMock} />);
        expect(renderMock).toHaveBeenCalled();
    });

    test('translation return Hello World', () => {
        const mountedI18 = shallow(<I18 translations={translationListMock}
                                  render={i18 =>(<Fragment>{i18('global.demo')}</Fragment>)} />);
        expect(mountedI18.text()).toBe(translationListMock['global.demo']);
    });
});