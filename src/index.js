import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './DEComp/Reducers';
import authRed from './DEComp/Reducers/authReducer';

const rootReducer = combineReducers({
    red1: reducers,
    auth: authRed
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const de_tdc_store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={de_tdc_store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
