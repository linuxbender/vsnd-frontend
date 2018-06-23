import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {initDefaultUiState} from './actions/uiAction';
import App from './App';
import message_De from './i18n/message.de';
import message_Fr from './i18n/message.fr';
import message_It from './i18n/message.it';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/appStore';
import {DE_CH} from './utils/appTypes';

const translation = {'de_CH': message_De, 'de_FR': message_Fr, 'de_IT': message_It};
const ui = {languageCode: DE_CH, isLoading: false, translation: translation};

const store = configureStore();
store.dispatch(initDefaultUiState(ui));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();