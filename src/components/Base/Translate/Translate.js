import React from 'react';
import I18 from '../i18n';

const Translate = (props) => (<I18 translate={i18 => i18(props.children)} />);

export default Translate;