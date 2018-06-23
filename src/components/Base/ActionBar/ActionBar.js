import React, {Fragment} from 'react';
import {DE_CH, DE_FR, DE_IT} from '../../../utils/appTypes';

const ActionBar = (props) => (<Fragment>
    <a onClick={() => props.onLanguageCode(DE_CH)}>{DE_CH}</a>&nbsp;
    <a onClick={() => props.onLanguageCode(DE_FR)}>{DE_FR}</a>&nbsp;
    <a onClick={() => props.onLanguageCode(DE_IT)}>{DE_IT}</a>
</Fragment>);

export default ActionBar;