import React, {Component, Fragment} from 'react';

const translationService = (key, ...params) => {

    const param = (key) => params[key] || '';

    const listEng = [
        {key: 'global.a', value: ' Title A'},
        {key: 'global.b', value: ' Title B'},
        {key: 'global.c', value: ' Title C'},
        {key: 'global.d', value: ` Title D ${param(0)}`},
        {key: 'global.e', value: ` Title E, 1 arg.. ${param(0)} , 2 arg.. ${param(1)} 3 arg ${param(2)}`}
    ];
    const item = listEng.filter(i => i.key === key)[0] || '';

    return item.value || '';
};

//const I18 = (props) => <Fragment>{props.translate(translationService)}</Fragment>;

class I18 extends Component {
    render() {
        return (<Fragment>{this.props.translate(translationService)}</Fragment>);
    }
}

export default I18