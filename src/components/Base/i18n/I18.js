import React, {Component, Fragment} from 'react';
import messageDe from '../../../i18n/message.de';

//const I18 = (props) => <Fragment>{props.translate(translationService)}</Fragment>;

class I18 extends Component {

    translationService = (key, ...params) => {
        let item = messageDe[key] || '';
        params.forEach((param, index) => {
            item = item.replace(`{${index}}`, param);
        });
        return item || '';
    };


    render() {
        return (<Fragment>{this.props.translate(this.translationService)}</Fragment>);
    }
}

export default I18