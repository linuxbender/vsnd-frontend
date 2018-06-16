import {applyMiddleware, compose, createStore} from 'redux'
import {loggerMiddleware} from '../middleware/loggerMiddleware';
import rootReducer from '../reducers';
import {T_Store} from '../utils/appTypes';

const isDevMode = () => process.env.NODE_ENV !== 'production';

const composeEnhancers = isDevMode() ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const configureStore = () => {
    return createStore(
        rootReducer,
        T_Store,
        composeEnhancers(applyMiddleware(...loggerMiddleware))
    );
};

export default configureStore;