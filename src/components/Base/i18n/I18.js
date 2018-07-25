import React, {Component, Fragment} from 'react';

class I18 extends Component {
    translationService = (key, ...params) => {
        let item = this.props.translations[key] || '';
        params.forEach((param, index) => {
            item = item.replace(`{${index}}`, param);
        });
        return item || '';
    };
    render() {
        return (this.props.render(this.translationService));
    }
}

export default I18