import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/appStore';
import message from './i18n/message.de.json';

const store = configureStore();
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();

console.log(message);
console.log(message.filter(i => i.key === 'global.title')[0].value);